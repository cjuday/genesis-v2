<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\App;

//Models
use App\Models\About;
use App\Models\Certificates;
use App\Models\Brand;
use App\Models\Slider;
use Illuminate\Contracts\Session\Session;

class HomeController extends Controller
{
    public function home() {
        $sliders = Slider::orderBy('visiblity','asc')->get();
        foreach ($sliders as $slider) {
            $slider->translateFields(session('locale'));
        }
        $about = About::find(5);
        $about->translateFields(session('locale'));
        $certificates = Certificates::all();
        $clients = Brand::orderBy('visiblity','asc')->get();
        return Inertia::render('Home',[
            'slider' => $sliders,
            'about' => $about,
            'certificates' => $certificates,
            'clients' => $clients
        ]);
    }

    public function changeLanguage(Request $request)
    {
        $language = $request->input('language');
        session(['locale' => $language]);
        App::setLocale($language);
        return redirect()->back();
    }
}
