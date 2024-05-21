<!DOCTYPE html>
<html lang="en" data-layout="vertical" data-topbar="light" data-sidebar="dark" data-sidebar-size="lg" data-sidebar-image="none" data-preloader="disable">

<head>
  <meta charset="utf-8" />
  <title>Sign In | {{ env('APP_NAME') }}</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta content="" name="description" />
  <meta content="" name="author" />
  <!-- App favicon -->
  <link rel="shortcut icon" href="{{ asset('backend/images/favicon.ico') }}" />

  <!-- Layout config Js -->
  <script src="{{ asset('backend/js/layout.js') }}"></script>
  <!-- Bootstrap Css -->
  <link href="{{ asset('backend/css/bootstrap.min.css') }}" rel="stylesheet" type="text/css" />
  <!-- Icons Css -->
  <link href="{{ asset('backend/css/icons.min.css') }}" rel="stylesheet" type="text/css" />
  <!-- App Css-->
  <link href="{{ asset('backend/css/app.min.css') }}" rel="stylesheet" type="text/css" />
  <!-- custom Css-->
  <link href="{{ asset('backend/css/custom.min.css') }}" rel="stylesheet" type="text/css" />
</head>

<body>
  <div class="auth-page-wrapper pt-5">
    <div class="auth-page-content">
      <div class="loginpage-background">
        <div class="loginpage-grayBackground"></div>
        <div class="loginpage-verticalLine loginpage-verticalLine--first"></div>
        <div class="loginpage-verticalLine loginpage-verticalLine--second"></div>
        <div class="loginpage-verticalLine loginpage-verticalLine--third"></div>
        <div class="loginpage-verticalLine loginpage-verticalLine--fourth"></div>
        <div class="loginpage-verticalLine loginpage-verticalLine--fifth"></div>
      </div>

      <div class="container">
        <div class="row justify-content-center">
          <div class="col-md-8 col-lg-6 col-xl-5">
            <div class="card mt-4 login-card">
              <div class="card-body p-4">
                <div class="text-center mt-2">
                  <h5 class="text-primary signIn-heading">Sign in to your account</h5>
                </div>
                <div class="p-2 mt-4">
                  <form action="payment.html" method="post">
                    <div class="mb-3">
                      <label for="username" class="form-label">Username</label>
                      <input type="text" class="form-control" id="username" placeholder="Enter username" />
                    </div>

                    <div class="mb-3">
                      <div class="float-end">
                        <a href="auth-pass-reset-basic.html" class="text-muted">Forgot password?</a>
                      </div>
                      <label class="form-label" for="password-input">Password</label>
                      <div class="position-relative auth-pass-inputgroup mb-3">
                        <input type="password" class="form-control pe-5 password-input" placeholder="Enter password" id="password-input" />
                        <button class="btn btn-link position-absolute end-0 top-0 text-decoration-none text-muted password-addon" type="button" id="password-addon">
                          <i class="ri-eye-fill align-middle"></i>
                        </button>
                      </div>
                    </div>

                    <div class="form-check">
                      <input class="form-check-input" type="checkbox" value="" id="auth-remember-check" />
                      <label class="form-check-label" for="auth-remember-check">Remember me</label>
                    </div>

                    <div class="mt-4">
                      <button class="btn btn-success w-100" type="submit">
                        Sign In
                      </button>
                    </div>
                  </form>
                </div>
              </div>
              <!-- end card body -->
            </div>
            <!-- end card -->
          </div>
        </div>
        <!-- end row -->
      </div>
      <!-- end container -->
    </div>
    <!-- end auth page content -->
  </div>
  <!-- end auth-page-wrapper -->

  <!-- JAVASCRIPT -->
  <script src="{{ asset('backend/libs/bootstrap/js/bootstrap.bundle.min.js') }}"></script>
  <script src="{{ asset('backend/libs/simplebar/simplebar.min.js') }}"></script>
  <script src="{{ asset('backend/libs/node-waves/waves.min.js') }}"></script>
  <script src="{{ asset('backend/libs/feather-icons/feather.min.js') }}"></script>
  <script src="{{ asset('backend/js/pages/plugins/lord-icon-2.1.0.js') }}"></script>
  <script src="{{ asset('backend/js/plugins.js') }}"></script>

  <!-- particles js -->
  <script src="{{ asset('backend/libs/particles.js/particles.js') }}"></script>
  <!-- particles app js -->
  <script src="{{ asset('backend/js/pages/particles.app.js') }}"></script>
  <!-- password-addon init -->
  <script src="{{ asset('backend/js/pages/password-addon.init.js') }}"></script>
</body>

</html>