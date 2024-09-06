<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

//Models
use App\Models\Products;

class DashboardController extends Controller
{
    public function DashboardView() {
        $data = Products::orderBy('id','desc')->paginate(20);
        
        return Inertia::render('Dashboard', [
            'appUrl' => env('APP_URL'),
            'products' => $data
        ]);
    }
}
