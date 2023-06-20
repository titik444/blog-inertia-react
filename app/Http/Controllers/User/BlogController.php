<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;

// use library here
use Inertia\Inertia;

// use everything here
use Symfony\Component\HttpFoundation\Request;

// use model here
use App\Models\Post;

// thirdparty package

class BlogController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $posts = Post::with('category', 'createdBy')
            ->when($request->q, function ($query) use ($request) {
                $query->where('title', 'LIKE', "%{$request->q}%");
            })
            ->whereHas('category', function ($query) {
                $query->whereNull('deleted_at');
            })
            ->whereHas('createdBy', function ($query) {
                $query->whereNull('deleted_at');
            })
            ->latest()
            ->paginate(6)
            ->withQueryString();

        return Inertia::render('User/Blog', compact('posts'));
    }
}
