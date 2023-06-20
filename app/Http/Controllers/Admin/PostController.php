<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;

// use library here
use Inertia\Inertia;
use Symfony\Component\HttpFoundation\Request;
use Illuminate\Support\Facades\Auth;

// request
use App\Http\Requests\Post\StorePostRequest;
use App\Http\Requests\Post\UpdatePostRequest;

// service
use App\Services\Admin\PostService;

// models
use App\Models\Category;


class PostController extends Controller
{
    private $postService;

    public function __construct(PostService $postService)
    {
        $this->postService = $postService;
    }

    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {


        $posts = $this->postService->getAll($request);

        return Inertia::render('Admin/Post/Index', compact('posts'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $isAdmin = Auth::user()->isAdmin();

        $categories = Category::get();

        return Inertia::render('Admin/Post/Create', compact('isAdmin', 'categories'));
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StorePostRequest $request)
    {
        // get all request
        $data = $request->all();

        // store to database
        $this->postService->create($data);

        return redirect()->route('admin.post.index')->with([
            'message' => "Post Successfully Added",
            'type' => 'success'
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit($id)
    {
        $isAdmin = Auth::user()->isAdmin();

        $categories = Category::get();

        $post = $this->postService->find($id);

        return Inertia::render('Admin/Post/Edit', compact('isAdmin', 'categories', 'post'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdatePostRequest $request, $id)
    {
        // get all request
        $data = $request->all();

        // update to database
        $this->postService->update($data, $id);

        return redirect()->route('admin.post.index')->with([
            'message' => "Post Successfully Updated",
            'type' => 'success'
        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $this->postService->delete($id);

        return back()->with([
            'message' => "Post Successfully Deleted",
            'type' => 'success'
        ]);
    }

    public function restore($id)
    {
        $this->postService->restore($id);

        return back()->with([
            'message' => "Post Successfully Restored",
            'type' => 'success'
        ]);
    }
}
