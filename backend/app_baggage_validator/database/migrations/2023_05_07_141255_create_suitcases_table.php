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
        Schema::create('suitcases', function (Blueprint $table) {
            $table->id();
            $table->string('description', 50);
            $table->bigInteger('weight');
            $table->string('color');
            $table->string('image');
            $table->bigInteger('dimension');
            $table->string('protocol_trip');
            $table->bigInteger('tag_id');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('suitcases');
    }
};
