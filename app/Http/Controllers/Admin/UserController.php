<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;

// use library here
use Inertia\Inertia;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Storage;
use Symfony\Component\HttpFoundation\Request;

// request
use App\Http\Requests\User\StoreUserRequest;
use App\Http\Requests\User\UpdateUserRequest;

// use everything here
use File;

// use model here
use App\Models\User;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $users = User::with('roles')
            ->withTrashed()
            ->when($request->q, function ($query) use ($request) {
                $query->where('name', 'LIKE', "%{$request->q}%")
                    ->orWhere('username', 'LIKE', "%{$request->q}%");
            })
            ->orderBy('name')
            ->paginate(10)
            ->withQueryString();

        return Inertia::render('Admin/User/Index', compact('users'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Admin/User/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreUserRequest $request)
    {
        // get all request
        $data = $request->all();

        // upload process here
        if (isset($data['avatar'])) {

            $path = 'images/' . now()->format('Y/m/d');

            if (!Storage::has('public/' . $path)) {
                Storage::makeDirectory('public/' . $path);
            }

            // store file
            $data['profile_photo'] = $request->file('avatar')->store($path, 'public');
        }

        // hash password
        $data['password'] = Hash::make('user1234');

        // store to database
        $user = User::create($data);
        $user->assignRole($request->roles == 1 ? 'admin' : 'user');

        return redirect()->route('admin.user.index')->with([
            'message' => "User Successfully Added",
            'type' => 'success'
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(User $user)
    {
        $user->load('roles');

        return Inertia::render('Admin/User/Edit', compact('user'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateUserRequest $request, User $user)
    {
        // get all request
        $data = $request->all();

        // upload process here
        if (isset($data['avatar'])) {

            $path = 'images/' . now()->format('Y/m/d');

            if (!Storage::has('public/' . $path)) {
                Storage::makeDirectory('public/' . $path);
            }

            // store file
            $data['profile_photo'] = $request->file('avatar')->store($path, 'public');

            // first checking old profile photo to delete from storage
            $get_item = $user['profile_photo'];

            // delete old profile photo from storage
            $data_old = 'storage/' . $get_item;
            if (File::exists($data_old)) {
                File::delete($data_old);
            } else {
                File::delete('storage/app/public/' . $get_item);
            }
        }

        // update to database
        $user->update($data);
        $user->syncRoles($request->roles == 1 ? 'admin' : 'user');

        return redirect()->route('admin.user.index')->with([
            'message' => "User Successfully Updated",
            'type' => 'success'
        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(User $user)
    {
        // $user->forceDelete();
        $user->delete();

        return back()->with([
            'message' => "User Successfully Deleted",
            'type' => 'success'
        ]);
    }

    public function restore($id)
    {
        User::withTrashed()->find($id)->restore();

        return back()->with([
            'message' => "User Successfully Restored",
            'type' => 'success'
        ]);
    }
}
