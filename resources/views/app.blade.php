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
        <link rel="stylesheet" href="{{ asset('css/bootstrap.min.css') }}">
        @vite(['resources/css/app.css','resources/js/app.jsx'])
        @inertiaHead
        <link rel="stylesheet" href="{{ asset('css/font-awesome/all.min.css') }}">
        <link rel="stylesheet" href="{{ asset('css/fonts/google-fonts.css') }}">
    </head>
    <body>
        @inertia
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" defer></script>
    </body>
</html>
