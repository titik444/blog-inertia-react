<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;

// use library here
use Inertia\Inertia;
// use Illuminate\Support\Facades\Redis;
use Symfony\Component\HttpFoundation\Request;

// request
use App\Http\Requests\Category\StoreCategoryRequest;
use App\Http\Requests\Category\UpdateCategoryRequest;

// use everything here
use Auth;

// use model here
use App\Models\Category;


class CategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $categories = Category::withTrashed()
            ->when($request->q, function ($query) use ($request) {
                $query->where('title', 'LIKE', "%{$request->q}%");
            })
            ->orderBy('title')
            ->paginate(10)
            ->withQueryString();

        return Inertia::render('Admin/Category/Index', compact('categories'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Admin/Category/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreCategoryRequest $request)
    {
        // get all request
        $data = $request->all();

        // store to database
        $category = Category::create($data);

        // // store to redis
        // $categories = Redis::get('list_category');

        // // store to redis
        // $categories = Category::orderBy('title')->get();

        // Redis::set('list_category', $categories);

        return redirect()->route('admin.category.index')->with([
            'message' => "Category Successfully Added",
            'type' => 'success'
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit($id)
    {
        $category = Category::findOrFail($id);

        return Inertia::render('Admin/Category/Edit', compact('category'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateCategoryRequest $request, $id)
    {
        // get all request
        $data = $request->all();

        // update to database
        $category = Category::findOrFail($id);

        $category->update($data);

        // // store to redis
        // $categories = Category::orderBy('title')->get();

        // Redis::set('list_category', $categories);

        return redirect()->route('admin.category.index')->with([
            'message' => "Category Successfully Updated",
            'type' => 'success'
        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $category = Category::findOrFail($id);

        // $category->forceDelete();
        $category->delete();

        // store to redis
        $categories = Category::orderBy('title')->get();

        Redis::set('list_category', $categories);

        return back()->with([
            'message' => "Category Successfully Deleted",
            'type' => 'error'
        ]);
    }

    public function restore($id)
    {
        Category::withTrashed()->findOrFail($id)->restore();

        return back()->with([
            'message' => "Category Successfully Restored",
            'type' => 'success'
        ]);
    }
}
