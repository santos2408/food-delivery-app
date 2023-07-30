<template>
  <main class="h-full flex-1 px-4 py-5 xl:w-[650px] xl:flex-initial">
    <div class="mx-auto flex h-full max-w-sm flex-col justify-between">
      <header class="w-full">
        <div class="inline-block">
          <a href="/">
            <img src="@/assets/food-delivery-logo.svg" alt="Food Delivery" />
          </a>
        </div>
      </header>

      <div>
        <h1 class="mb-5 text-6xl font-bold text-brand-dark-1">Login</h1>
        <p class="mb-8 text-sm text-brand-gray-1">
          Sign in with your data that you entered during your registration.
        </p>

        <div>
          <button
            type="button"
            class="flex w-full items-center justify-center gap-1 rounded-lg border-[1px] border-brand-gray-3 p-3"
          >
            <google-icon />
            <span>Log in with Google</span>
          </button>

          <div class="my-6 flex items-center justify-center gap-3">
            <span class="inline-block h-[1px] w-16 bg-brand-gray-3"></span>
            <span class="text-sm text-brand-gray-2">Or</span>
            <span class="inline-block h-[1px] w-16 bg-brand-gray-3"></span>
          </div>
        </div>

        <login-form />
      </div>

      <div class="text-center">
        <p class="text-bold text-sm text-brand-gray-1">
          Don't have an account?
          <router-link
            :to="{ name: 'Signup' }"
            href="#"
            class="font-bold text-brand-purple-1"
          >
            Sign up
          </router-link>
        </p>
      </div>
    </div>
  </main>
</template>

<script>
import GoogleIcon from "@/assets/Icons/GoogleIcon.vue";
import LoginForm from "@/components/Auths/Login/LoginForm.vue";

export default {
  name: "TheLogin",
  components: {
    LoginForm,
    GoogleIcon,
  },
};
</script>
