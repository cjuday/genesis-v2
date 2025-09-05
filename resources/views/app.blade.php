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

        <!-- ✅ Preload critical CSS -->
        <link rel="preload" as="style" href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css">

        <!-- ✅ Bootstrap CSS (non-blocking load) -->
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" media="print" onload="this.media='all'">

        <!-- ✅ App CSS & JS -->
        @vite(['resources/css/app.css','resources/js/app.jsx'])
        @inertiaHead

        <!-- ✅ Icons (Font Awesome + Bootstrap Icons) -->
        <link rel="stylesheet" href="{{ asset('css/font-awesome/all.min.css') }}" media="print" onload="this.media='all'">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.2/font/bootstrap-icons.css" media="print" onload="this.media='all'">

        <!-- ✅ Google Fonts (preconnect + preload + non-blocking load) -->
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link rel="preload" as="style" href="https://fonts.googleapis.com/css2?family=Poiret+One&family=Caveat:wght@400;500;600;700&family=Josefin+Sans:wght@400;700&family=Raleway:wght@400;700&family=Playfair+Display:wght@400;700&family=Indie+Flower&family=Charm:wght@400;700&display=swap">
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Poiret+One&family=Caveat:wght@400;500;600;700&family=Josefin+Sans:wght@400;700&family=Raleway:wght@400;700&family=Playfair+Display:wght@400;700&family=Indie+Flower&family=Charm:wght@400;700&display=swap" media="print" onload="this.media='all'">
        <noscript>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Poiret+One&family=Caveat:wght@400;500;600;700&family=Josefin+Sans:wght@400;700&family=Raleway:wght@400;700&family=Playfair+Display:wght@400;700&family=Indie+Flower&family=Charm:wght@400;700&display=swap">
        </noscript>
    </head>
    <body>
        @inertia
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.1/jquery.min.js" defer></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" defer></script>
    </body>
</html>
