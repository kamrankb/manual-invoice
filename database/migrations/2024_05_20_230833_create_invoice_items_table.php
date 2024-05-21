<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateInvoiceItemsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('invoice_items', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('invoice_id');
            $table->string('HAWB', 20);
            $table->date('date')->nullable();
            $table->string('description', 100)->nullable();
            $table->string('service', 100);
            $table->string('unit');
            $table->integer('qty')->nullable();
            $table->integer('rate')->nullable();
            $table->float('total')->nullable();
            $table->timestamps();
            $table->softDeletes();
            
            $table->foreign('invoice_id')->references('id')->on('invoice')->onDelete('cascade')->onUpdate('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('invoice_items');
    }
}
