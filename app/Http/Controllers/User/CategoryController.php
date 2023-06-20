<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

// use model here
use App\Models\Post;
use App\Models\Category;

class CategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     */

    public function show($slug)
    {
        $category = Category::where('slug', $slug)->first();

        $posts = Post::with('category', 'createdBy')
            ->whereHas('category', function ($query) use ($slug) {
                $query->where('slug', $slug);
            })
            ->latest()
            ->paginate(6);

        return Inertia::render('User/Category', compact('category', 'posts'));
    }
}
