<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */

    public function up(): void
    {
        Schema::create('trips', function (Blueprint $table) {
            $table->id();
            $table->string('pnr');
            $table->string('ticket');
            $table->string('protocol', 50);
            $table->string('description');
            $table->string('status_trip');
            $table->string('airline');
            $table->string('origin');
            $table->string('destiny');
            $table->datetime('trip_coming');
            $table->datetime('trip_exit');
            $table->string('image_document');
            $table->bigInteger('user_id');
            $table->bigInteger('customer_id');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('trips');
    }
};
