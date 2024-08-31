<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;

//Models
use App\Models\About;
use App\Models\Certificates;

class HomeController extends Controller
{
    public function home() {
        $about = About::find(5);
        $certificates = Certificates::all();
        return Inertia::render('Home',[
            'about' => $about,
            'certificates' => $certificates
        ]);
    }
}
