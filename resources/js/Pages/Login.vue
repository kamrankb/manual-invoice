<style>
  span.error {
    color: red;
    font-size: 0.8rem;
  }
  .request-password {
    font-size: 0.8rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .request-password a {
    text-decoration: none;
    color: #007bff;
  }
</style>

<template>
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
          <div class="row">
              <div class="col-lg-12">
                  <div class="text-center mt-sm-5 mb-4 text-white-50">
                      <div>
                          <a :href="siteURL" class="d-inline-block auth-logo">
                              <img :src="siteURL + 'backend/images/logo-dark.png'" alt="" width="150">
                          </a>
                      </div>
                    
                  </div>
              </div>
          </div>

          <div class="row justify-content-center">
            <div class="col-md-8 col-lg-6 col-xl-5">
              <div class="card mt-4 login-card">
                <div class="card-body p-4">
                  <div class="text-center mt-2">
                    <h5 class="text-primary signIn-heading">Sign in to your account</h5>
                  </div>
                  <div class="p-2 mt-4">
                    <form @submit.prevent="credentials.post(route('login'))">
                      <div class="mb-3">
                        <label for="email" class="form-label">Email</label>
                        <input type="text" class="form-control" id="email" v-model="credentials.email" placeholder="Enter email here" />
                        <span class="error" v-if="credentials.errors.email">{{ credentials.errors.email[0] }}</span>
                      </div>
  
                      <div class="mb-3">
                        <label class="form-label" for="password-input">Password</label>
                        <div class="position-relative auth-pass-inputgroup mb-3">
                          <input :type="!passwordVisible ? 'password' : 'text'" class="form-control pe-5 password-input" placeholder="Enter password" id="password-input" v-model="credentials.password" />
                          <button class="btn btn-link position-absolute end-0 top-0 text-decoration-none text-muted password-addon" type="button" id="password-addon" @click="togglePassword">
                            <i class="ri-eye-fill align-middle"></i>
                          </button>

                          <span class="error" v-if="credentials.errors.password">{{ credentials.errors.password[0] }}</span>
                        </div>
                      </div>
  
                      <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="auth-remember-check" v-model="credentials.remember_me" />
                        <label class="form-check-label" for="auth-remember-check">Remember me</label>
                      </div>

                      <span class="error" v-if="message">{{ message }}</span>

                      <div class="mt-4">
                        <button class="btn btn-primary w-100" type="submit" :disabled="credentials.processing">Sign In</button>
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
  <Head>
    <title>Login</title>
  </Head>
</template>

<script setup>
import { useForm, usePage } from '@inertiajs/vue3';
import { computed, ref } from 'vue';

const message = computed(() => usePage().props.flash.message)
const siteURL = computed(() => process.env.MIX_BRAND_URL);

const passwordVisible = ref(false);

const togglePassword = () => {
  passwordVisible.value =!passwordVisible.value;
};

const credentials = useForm({
  email: '',
  password: '',
  remember_me: 0,
});
</script>