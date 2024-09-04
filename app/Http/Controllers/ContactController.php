<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Inertia\Inertia;
use App\Mail\ContactMail;

class ContactController extends Controller
{
    public function sendEmail(Request $request)
    {
        $request->validate([
            'name' => 'required|string',
            'email' => 'required|email',
            'subject' => 'required|string',
            'message' => 'required|string',
        ]);

        if(Mail::to('info@genesis-bd.com')->send(new ContactMail($request->name, $request->email, $request->subject, $request->message))){
            return Inertia::render('Contact', [
                'success' => true
            ]);
        }else{
            return Inertia::render('Contact', [
                'error' => true
            ]);
        }
    }
}
