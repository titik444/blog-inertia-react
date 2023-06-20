<?php

namespace App\Repositories\Admin;

use App\Models\Post;

use Auth;

class PostRepository
{
    private $post;

    public function __construct(Post $post)
    {
        $this->post = $post;
    }

    public function getAll($request)
    {
        $post = $this->post
            ->with('category')
            ->withTrashed()
            ->when($request->q, function ($query) use ($request) {
                $query->where('title', 'LIKE', "%{$request->q}%")
                    ->orWhere('body', 'LIKE', "%{$request->q}%");
            })
            ->latest()
            ->paginate(10)
            ->withQueryString();

        return $post;
    }

    public function getAllByUserLogin($request)
    {
        $post = $this->post
            ->with('category')
            ->withTrashed()
            ->when($request->q, function ($query) use ($request) {
                $query->where('title', 'LIKE', "%{$request->q}%")
                    ->orWhere('body', 'LIKE', "%{$request->q}%");
            })
            ->where('created_by', Auth::user()->id)
            ->latest()
            ->paginate(10)
            ->withQueryString();

        return $post;
    }

    public function find($id)
    {
        return $this->post->findOrFail($id);
    }

    public function create($data)
    {
        $this->post->create($data);
    }

    public function update($data, $id)
    {
        $post = $this->post->findOrFail($id);
        $post->update($data);
    }

    public function delete($id)
    {
        $post = $this->post->findOrFail($id);
        $post->delete();
    }

    public function restore($id)
    {
        $post = $this->post->withTrashed()->findOrFail($id);
        $post->restore();
    }
}
