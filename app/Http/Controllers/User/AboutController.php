<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AboutController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {

        return Inertia::render('User/About');
    }
}
