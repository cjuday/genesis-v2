<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

//Controllers
use App\Http\Controllers\ContactController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\DashboardController;

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

Route::get('/', function () {
    return Inertia::render('Home');
});

Route::get('/about', function () {
    return Inertia::render('About');
});

Route::get('/services', function () {
    return Inertia::render('Services');
});

//Products
Route::get('/products', function () {
    return Inertia::render('Products');
});

Route::get('/products/{category}/{selection}', [ProductController::class, 'index']);

Route::get('/contact', function () {
    return Inertia::render('Contact');
});

//mail send
Route::post('/contact/send', [ContactController::class, 'sendEmail']);


//////////////////Admin
Route::get('/admin/login', function () {
    return Inertia::render('Login');
})->name('login')->middleware('guest');

Route::post('/login-attempt', [AuthController::class, 'login']);

Route::middleware(['auth'])->group(function () {
    //Logout
    Route::post('/logout', [AuthController::class, 'logout']);
    //Dashboard
    Route::get('/dashboard', [DashboardController::class, 'DashboardView'])->name('products.index');
    Route::post('/product-upload', [ProductController::class, 'store']);
    Route::delete('/products/{id}', [ProductController::class, 'destroy'])->name('products.destroy');
});