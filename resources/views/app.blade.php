<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <!-- Google tag (gtag.js) -->
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-4GJSRS3QHB"></script>
        <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-4GJSRS3QHB');
        </script>

        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <meta name="robots" content="index, follow">
        <title>Genesis - One Stop Business Solution in Bangladesh</title>
        @viteReactRefresh
        @vite(['resources/css/app.css','resources/js/app.jsx'])
        @inertiaHead

        <!-- Font Awesome (non-blocking) -->
        <link rel="preload" as="style" href="{{ asset('css/font-awesome/all.min.css') }}">
        <link rel="stylesheet" href="{{ asset('css/font-awesome/all.min.css') }}" media="print" onload="this.media='all'">

        <!-- Fallback for no-JS -->
        <noscript>
            <link rel="stylesheet" href="{{ asset('css/font-awesome/all.min.css') }}">
        </noscript>
    </head>
    <body>
        @inertia
    </body>
</html>
