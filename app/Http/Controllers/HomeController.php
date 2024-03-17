<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;

//Models
use App\Models\About;

class HomeController extends Controller
{
    public function home() {
        $about = About::find(5);
        return Inertia::render('Home',[
            'about' => $about
        ]);
    }
}
