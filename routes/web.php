<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\HomeController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', [HomeController::class, 'home']);
Route::post('/change-language', [HomeController::class, 'changeLanguage'])->name('change-language');

Route::get('/about', function () {
    return Inertia::render('About');
});

Route::get('/products', function () {
    return Inertia::render('Products');
});