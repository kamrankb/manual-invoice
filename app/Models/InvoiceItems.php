<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class InvoiceItems extends Model
{
    use HasFactory;
    protected $fillable = ['invoice_id','HAWB','date','description','service','unit','qty','rate','total'];
    
    public function invoice() {
        return $this->belongsTo(InvoiceItems::class, 'id', 'invoice_id');
      }
}
