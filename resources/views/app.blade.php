<!DOCTYPE html>
<html lang="en" data-layout="vertical" data-topbar="light" data-sidebar="dark" data-sidebar-size="lg" data-sidebar-image="none" data-preloader="disable" data-sidebar-visibility="show" data-layout-style="default" data-layout-mode="light" data-layout-width="fluid" data-layout-position="fixed">

<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />

  <!-- App favicon -->
  <link rel="shortcut icon" href="assets/images/favicon.ico" />


  <!-- Layout config Js -->
  <script src="{{ asset('backend/js/layout.js') }}"></script>
  <!-- Bootstrap Css -->
  <link href="{{ asset('backend/css/bootstrap.min.css') }}" rel="stylesheet" type="text/css" />
  <!-- Icons Css -->
  <link href="{{ asset('backend/css/icons.min.css') }}" rel="stylesheet" type="text/css" />
  <link href="{{ asset('backend/fonts/SegoeUI/style.css') }}" rel="stylesheet" type="text/css" />
  <!-- App Css-->
  <link href="{{ asset('backend/css/app.min.css') }}" rel="stylesheet" type="text/css" />
  <!-- custom Css-->
  <link href="{{ asset('backend/css/custom.min.css') }}" rel="stylesheet" type="text/css" />

  @inertiaHead
  @routes
</head>

<body>
  @inertia

  <!-- JAVASCRIPT -->
  <script src="{{ asset('backend/libs/bootstrap/js/bootstrap.bundle.min.js') }}"></script>
  <script src="{{ asset('backend/libs/simplebar/simplebar.min.js') }}"></script>
  <script src="{{ asset('backend/libs/node-waves/waves.min.js') }}"></script>
  <script src="{{ asset('backend/libs/feather-icons/feather.min.js') }}"></script>
  
  <script src="{{ asset(mix('js/app.js')) }}"></script>
</body>

</html>