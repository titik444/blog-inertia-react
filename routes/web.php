<?php

use Illuminate\Support\Facades\Route;

use App\Http\Controllers\User\LandingController;
use App\Http\Controllers\User\CategoryController;
use App\Http\Controllers\User\BlogController;
use App\Http\Controllers\User\PostController;
use App\Http\Controllers\User\AboutController;
use App\Http\Controllers\User\ContactController;
use App\Http\Controllers\User\ServicesController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

require __DIR__ . '/auth.php';

Route::get('/', [LandingController::class, 'index'])->name('index');
Route::get('category/{slug}', [CategoryController::class, 'show'])->name('category.show');
Route::get('blog', [BlogController::class, 'index'])->name('blog.index');
Route::get('post/{slug}', [PostController::class, 'show'])->name('post.show');
Route::get('about', [AboutController::class, 'index'])->name('about.index');
Route::get('contact', [ContactController::class, 'index'])->name('contact.index');
Route::get('services', [ServicesController::class, 'index'])->name('services.index');
