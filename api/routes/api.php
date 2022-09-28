<?php

use App\Http\Controllers\Api\ProductController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::controller(ProductController::class)->group(function () {
    //mostrar productos
    Route::get('/products', 'index');
    //crear productos
    Route::post('/product', 'store');
    Route::get('/product/{id}', 'show');
    //actualizar productos
    Route::put('/product/{id}', 'update');
    //eliminar productos
    Route::delete('/product/{id}', 'destroy');
});
