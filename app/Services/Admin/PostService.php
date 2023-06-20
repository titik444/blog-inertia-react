<?php

namespace App\Services\Admin;

// use repository
use App\Repositories\Admin\PostRepository;

// use library here
//

// use everything here
use Auth;
use File;
use Storage;

class PostService
{
    private $postRepository;

    public function __construct(PostRepository $postRepository)
    {
        $this->postRepository = $postRepository;
    }

    public function getAll($request)
    {
        if (Auth::user()->isAdmin()) {
            return $this->postRepository->getAll($request);
        } else {
            return $this->postRepository->getAllByUserLogin($request);
        }
    }

    public function find($id)
    {
        return $this->postRepository->find($id);
    }

    public function create($data)
    {
        // upload process here
        if (isset($data['thumbnail'])) {

            $path = 'images/' . now()->format('Y/m/d');

            if (!Storage::has('public/' . $path)) {
                Storage::makeDirectory('public/' . $path);
            }

            // store file
            $data['thumbnail'] = $data['thumbnail']->store($path, 'public');
        }

        // store to database
        $this->postRepository->create($data);
    }

    public function update($data, $id)
    {
        // upload process here
        if (isset($data['thumbnail'])) {

            $path = 'images/' . now()->format('Y/m/d');

            if (!Storage::has('public/' . $path)) {
                Storage::makeDirectory('public/' . $path);
            }

            // store file
            $data['thumbnail'] = $data['thumbnail']->store($path, 'public');

            // first checking old thumbnail to delete from storage
            $get_item = $this->postRepository->find($id)->thumbnail;

            // delete old thumbnail from storage
            $data_old = 'storage/' . $get_item;
            if (File::exists($data_old)) {
                File::delete($data_old);
            } else {
                File::delete('storage/app/public/' . $get_item);
            }
        }

        // update to database
        $this->postRepository->update($data, $id);
    }

    public function delete($id)
    {
        $this->postRepository->delete($id);
    }

    public function restore($id)
    {
        $this->postRepository->restore($id);
    }
}
