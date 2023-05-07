<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::prefix('v1')->group(function(){
    Route::apiResource('customer', 'App\Http\Controllers\CustomerController');
    Route::apiResource('suitcase', 'App\Http\Controllers\SuitcaseController');
    Route::apiResource('tag', 'App\Http\Controllers\TagController');
    Route::apiResource('trip', 'App\Http\Controllers\TripController');
});
