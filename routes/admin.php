<?php

use Illuminate\Support\Facades\Route;

use App\Http\Controllers\Admin\PostController;
use App\Http\Controllers\Admin\CategoryController;
use App\Http\Controllers\Admin\UserController;

Route::get('/dashboard', function () {
    return redirect('/admin/post');
})->name('dashboard');

Route::group(['prefix' => 'admin', 'as' => 'admin.', 'middleware' => ['auth']], function () {
    Route::put('post/{post}/restore', [PostController::class, 'restore'])->name('post.restore');
    Route::resource('post', PostController::class)->except('show');

    // Admin Only
    Route::group(['middleware' => ['auth', 'role:admin']], function () {
        Route::put('category/{category}/restore', [CategoryController::class, 'restore'])->name('category.restore');
        Route::resource('category', CategoryController::class)->except('show');

        Route::put('user/{user}/restore', [UserController::class, 'restore'])->name('user.restore');
        Route::resource('user', UserController::class)->except('show');
    });
});
