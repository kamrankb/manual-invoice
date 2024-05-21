<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Invoice;
use App\Models\InvoiceItems;
use Carbon\Carbon;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Blade;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\Rule;
use Inertia\Inertia;

class InvoiceController extends Controller
{
    
    public function __construct() {
    }

    public function list(Request $request) {
        $page["title"] = "Invoice List - ".env('APP_NAME');

        $invoices = Invoice::query()
            ->select('id', 'invoice_no', 'created_by', 'issue_date', 'heading', 'total', 'created_at')
            ->with([
                'account:id,first_name,last_name',
            ]);

            $invoices = $invoices->latest('id')
            ->paginate(20)
            ->withQueryString();

        return Inertia::render('Admin/Invoice/List', [
            'invoices' => $invoices,
            'page' => $page,
        ]);

    }

    public function create(Request $request, $errors = "") {
        $page["title"] = "Create Invoice - ".env('APP_NAME');

        $invoice = Invoice::select('id','invoice_no')->orderBy('id','DESC');
        $data = [];

        if($invoice->exists()) {
            $invoice = $invoice->first();
            $invoiceNo = explode('-', $invoice->invoice_no);

            if (count($invoiceNo) == 3) {
                $invoiceNext = $invoiceNo[2] - 1000;
                $data["invoiceID"] = (int) $invoiceNext + 1;
            } else {
                $data['invoiceID'] = 1;
            }
        } else {
            $data['invoiceID'] = 1;
        }

        if($errors != "") {
            $data['errors'] = $errors;
        }

        return Inertia::render('Admin/Invoice/Create', [
            'page' => $page,
            'data' => $data
        ]);
    }

    public function store(Request $request) {
        try {
            $rules =  [
                'accountID' => [
                    'nullable',
                    Rule::exists('users', 'id')->where(function ($query) use ($request) {
                        return $request->filled('accountID');
                    }),
                ],
                'invoiceNumber' => 'required',
                'heading' => 'nullable',
                'issueDate' => 'required',
                'total' => 'required',
                'items.*' => 'required|array',
                'items.*.HAWB' => 'required',
                'items.*.date' => 'required',
                'items.*.desc' => 'required',
                'items.*.service' => 'required',
                'items.*.unit' => 'required',
                'items.*.qty' => 'required',
                'items.*.rate' => 'required',
                'items.*.total' => 'required',
            ];

            $customMessages = [
                'items.*.HAWB.required' => 'HAWB is required',
                'items.*.date.required' => 'Date is required',
                'items.*.desc.required' => 'Description is required',
                'items.*.service.required' => 'Service is required',
                'items.*.unit.required' => 'Unit is required',
                'items.*.qty.required' => 'Quantity is required',
                'items.*.rate.required' => 'Rate is required',
                'items.*.total.required' => 'Total is required',
            ];

            $validator = Validator::make($request->all(), $rules, $customMessages);

            if($validator->fails()) {
                return Redirect::route('admin.invoice.create')->withErrors($validator)->withInput();
            }

            DB::beginTransaction();

            $validatorData = $validator->validated();

            $invoice = Invoice::create([
                'invoice_no' => $request->input('invoiceNumber'),
                'heading' => $request->input('heading'),
                'issue_date' => $request->input('issueDate'),
                'total' => $request->input('total'),
                'created_by' => $request->input('accountID'),
            ]);


            foreach($request->input('items') as $item) {
                $invoice->invoiceItems()->create([
                    'invoice_id' => $invoice,
                    'HAWB' => $item['HAWB'],
                    'date' => $item['date'],
                    'description' => $item['desc'],
                    'service' => $item['service'],
                    'unit' => $item['unit'],
                    'qty' => $item['qty'],
                    'rate' => $item['rate'],
                    'total' => $item['total'],
                ]);
            } 
            DB::commit();

            Session::flash('success', true);
            Session::flash('message', 'Invoice intertion succussefulyy.');

            return Redirect::route('admin.invoice.list');
        } catch(Exception $e) {
            DB::rollBack();

            Session::flash('success', false);
            Session::flash('message', $e->getMessage());

            return Redirect::route('admin.invoice.list');
        }
    }

    public function edit($id) {
        $page["title"] = "Edit Invoice - ".env('App_NAME');

        $invoice = Invoice::with('payment.link.categories')
                    ->find($id);

        
        return Inertia::render('Admin/Invoice/Edit', [
            'page' => $page,
            'invoice' => $invoice,
        ]);
    }

    public function update(Request $request, $id) {
        try {
            $rules =  [
                'accountID' => [
                    'nullable',
                    Rule::exists('users', 'id')->where(function ($query) use ($request) {
                        return $request->filled('accountID');
                    }),
                ],
                'invoiceNumber' => 'required',
                'heading' => 'nullable',
                'issueDate' => 'required',
                'items.*' => 'required|array',
                'items.*.HAWB' => 'required',
                'items.*.date' => 'required',
                'items.*.desc' => 'required',
                'items.*.service' => 'required',
                'items.*.unit' => 'required',
                'items.*.qty' => 'required',
                'items.*.rate' => 'required',
                'items.*.total' => 'required',
            ];

            $validator = Validator::make($request->all(), $rules);

            if($validator->fails()) {
                return response()->json(['errors' => $validator->errors()], 422);
            }

            DB::beginTransaction();

            $validatorData = $validator->validated();

            $invoice = Invoice::create([
                'invoice_no' => $request->input('invoiceNumber'),
                'heading' => $request->input('heading'),
                'issue_date' => $request->input('issueDate'),
                'total' => $request->input('total'),
                'created_by' => $request->input('accountID'),
            ]);


            foreach($request->input('items') as $item) {
                $invoice->invoiceItems()->create([
                    'invoice_id' => $invoice,
                    'HAWB' => $item['HAWB'],
                    'date' => $item['date'],
                    'description' => $item['desc'],
                    'service' => $item['service'],
                    'unit' => $item['unit'],
                    'qty' => $item['qty'],
                    'rate' => $item['rate'],
                    'total' => $item['total'],
                ]);
            } 
            DB::commit();

            Session::flash('success', true);
            Session::flash('message', 'Invoice intertion succussefulyy.');

            return Redirect::route('admin.invoice.list');
        } catch(Exception $e) {
            DB::rollBack();

            Session::flash('success', false);
            Session::flash('message', $e->getMessage());

            return Redirect::route('admin.invoice.list');
        }
    }

    public function delete($invoiceID){
        try {
            $invoice = Invoice::withTrashed()->find($invoiceID);
            if (!empty($invoice)) {
                $invoice->forceDelete(); // Permanent delete
                $data['success'] = true;
                $data['message'] = 'Invoice Deleted Successfully';

                Session::flash('success', true);
                Session::flash('message', $data['message']);
                return Redirect::route('admin.invoice.list');
            }

        } catch(Exception $ex) {
            return response()->json([
                "message" => $ex->getMessage()
            ]);
        }
    }
}
