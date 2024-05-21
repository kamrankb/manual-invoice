<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Invoice extends Model
{
  use HasFactory, SoftDeletes;

  protected $table = 'invoice';
  protected $fillable = ['id','invoice_no','heading','total','issue_date','created_by'];

  public function account()
  {
    return $this->belongsTo(User::class, 'created_by', 'id');
  }

  public function invoiceItems() {
    return $this->hasMany(InvoiceItems::class, 'invoice_id', 'id');
  }

}
