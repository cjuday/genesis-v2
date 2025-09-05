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

        <!-- Bootstrap (non-blocking) -->
        <link rel="preload" as="style" href="{{ asset('css/bootstrap.min.css') }}">
        <link rel="stylesheet" href="{{ asset('css/bootstrap.min.css') }}" media="print" onload="this.media='all'">

        <!-- Font Awesome (non-blocking) -->
        <link rel="preload" as="style" href="{{ asset('css/font-awesome/all.min.css') }}">
        <link rel="stylesheet" href="{{ asset('css/font-awesome/all.min.css') }}" media="print" onload="this.media='all'">

        <!-- Google Fonts (self-hosted, non-blocking) -->
        <link rel="preload" as="style" href="{{ asset('css/fonts/google-fonts.css') }}">
        <link rel="stylesheet" href="{{ asset('css/fonts/google-fonts.css') }}" media="print" onload="this.media='all'">

        <!-- Fallback for no-JS -->
        <noscript>
            <link rel="stylesheet" href="{{ asset('css/bootstrap.min.css') }}">
            <link rel="stylesheet" href="{{ asset('css/font-awesome/all.min.css') }}">
            <link rel="stylesheet" href="{{ asset('css/fonts/google-fonts.css') }}">
        </noscript>
    </head>
    <body>
        @inertia
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" defer></script>
    </body>
</html>
