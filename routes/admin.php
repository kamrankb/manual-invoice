<?php

use App\Http\Controllers\Admin\InvoiceController;
use App\Http\Controllers\Auth\LoginController;
use App\Models\Setting;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Redirect::route('admin.login');
})->middleware('guest');


Route::get('/login', function () {
    return Inertia::render('Login');
})->name('admin.login')->middleware('guest');


Route::middleware(['auth'])->group(function () {
    Route::controller(InvoiceController::class)->group(function () {
        Route::get('/invoice', 'list')->name('admin.invoice.list');
        Route::get('/invoice/create/', 'create')->name('admin.invoice.create');
        Route::post('/invoice/create', 'store')->name('admin.invoice.store');
        Route::get('/invoice/detail/{id?}', 'detail')->name('admin.invoice.detail.id');
        Route::get('/invoice/edit/{id?}', 'edit')->name('admin.invoice.edit');
        Route::post('/invoice/update/{id}', 'update')->name('admin.invoice.update');
        Route::get('/invoice/delete/{invoiceID}', 'delete')->name('admin.invoice.delete');
    });
});

Route::get('/logout', [LoginController::class, 'logout'])->name('admin.logout');