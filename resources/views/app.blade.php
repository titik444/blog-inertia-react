<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    {{-- seo setting base --}}
    <meta name="description" content="{{ 'Blog. Trusted & Professional.' }}">
    <meta key="keywords" content="{{ 'blog, laravel, react js, inertia' }}">
    <meta name="author" content="{{ 'Titik' }}">

    <title inertia>{{ config('app.name', 'Laravel') }}</title>

    <!-- Custom Stylesheet -->
    <link rel="stylesheet" href="{{ asset('/assets/css/style.css') }}" />
    <link rel="icon" href="{{ asset('/favicon.png') }}" />

    <!-- Iconscout CDN -->
    <link href="{{ url('https://unicons.iconscout.com/release/v4.0.0/css/line.css') }}" rel="stylesheet">
    <!-- Google Font (Montserrat) -->
    <link
        href="{{ url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800;900&display=swap') }}"
        rel="stylesheet">
    <!-- Pace -->
    <link rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/pace/1.2.4/themes/blue/pace-theme-minimal.min.css">


    <!-- Scripts -->
    @routes
    @viteReactRefresh
    @vite(['resources/js/app.jsx', "resources/js/Pages/{$page['component']}.jsx"])
    @inertiaHead
</head>

<body class="font-sans antialiased">
    @inertia

    <script src="https://cdnjs.cloudflare.com/ajax/libs/pace/1.2.4/pace.min.js"></script>
</body>

</html>
