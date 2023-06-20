<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;

// use library here
use Inertia\Inertia;

// use everything here

// use model here
use App\Models\Post;

// thirdparty package

class PostController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function show($slug)
    {
        $post = Post::with('createdBy')
            ->where('slug', $slug)
            ->first();

        return Inertia::render('User/Post', compact('post'));
    }
}
