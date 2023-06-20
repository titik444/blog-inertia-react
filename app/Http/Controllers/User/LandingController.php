<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;

// use library here
use Inertia\Inertia;

// use everything here

// use model here
use App\Models\Post;

// thirdparty package


class LandingController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $featured = Post::with('category', 'createdBy')
            ->whereHas('category', function ($query) {
                $query->whereNull('deleted_at');
            })
            ->whereHas('createdBy', function ($query) {
                $query->whereNull('deleted_at');
            })
            ->orderBy('featured', 'desc')
            ->orderBy('updated_at', 'desc')
            ->orderBy('created_at', 'desc')
            ->first();

        $posts = Post::with('category', 'createdBy')
            ->whereHas('category', function ($query) {
                $query->whereNull('deleted_at');
            })
            ->whereHas('createdBy', function ($query) {
                $query->whereNull('deleted_at');
            })
            ->orderBy('updated_at', 'desc')
            ->orderBy('created_at', 'desc')
            ->limit(6)
            ->get();

        return Inertia::render('User/LandingPage', compact('featured', 'posts'));
    }
}
