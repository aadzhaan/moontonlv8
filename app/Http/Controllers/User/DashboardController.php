<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Movie;

class DashboardController extends Controller
{
    public function index(){
        $featuredMovie = Movie::whereIsFeatured(true)->get();
        $allMovie = Movie::all();

        return Inertia::render('User/Dashboard/Index', ['featuredmovie' => $featuredMovie, 'allmovie' => $allMovie]);
    }
}