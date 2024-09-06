<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use Auth;

class AuthController extends Controller
{
    public function login(Request $request){
        $request->validate([
            'email' => 'required',
            'password' => 'required'
        ]);

        if(Auth::attempt(['email' => $request->email, 'password' => $request->password])){
            $request->session()->regenerate();
            return redirect('/dashboard');
        }else{
            return redirect()->back()->with('email', 'Invalid Email & Password Combination');
        }
    }

    public function logout()
    {
        auth()->logout();

        return redirect('/');
    }
}
