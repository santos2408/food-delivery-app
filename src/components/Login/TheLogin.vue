<template>
  <div class="mx-auto flex h-full max-w-sm flex-col justify-between">
    <header class="w-full">
      <div class="inline-block">
        <a href="/">
          <img src="../../assets/Shared/food-delivery-logo.svg" alt="Food Delivery" />
        </a>
      </div>
    </header>

    <div>
      <h1 class="mb-5 text-6xl font-bold text-brand-dark-1">Login</h1>
      <p class="mb-8 text-sm text-brand-gray-1">
        Sign in with your data that you entered during your registration.
      </p>

      <form action="">
        <div class="mb-7">
          <label for="email" class="mb-1 block text-sm font-semibold text-brand-gray-1">
            Email
          </label>
          <input-field
            id="email"
            type="email"
            placeholder="name@example.com"
            class="block w-full rounded-lg border-[1px] p-3 placeholder:text-sm placeholder:text-brand-gray-2 focus-visible:outline-brand-purple-1"
          />
        </div>

        <div class="mb-7">
          <label
            for="password"
            class="mb-1 block text-sm font-semibold text-brand-gray-1"
          >
            Password
          </label>
          <input-field
            id="password"
            type="email"
            placeholder="min. 8 characters"
            class="block w-full rounded-lg border-[1px] p-3 placeholder:text-sm placeholder:text-brand-gray-2 focus-visible:outline-brand-purple-1"
          />
        </div>

        <div class="mb-10">
          <the-checkbox text="Keep me logged in" />
        </div>

        <action-button type="submit" text="Login" />

        <router-link
          to="/forgotpassword"
          class="mx-auto block max-w-max text-sm font-bold text-brand-purple-1"
        >
          Forgot password
        </router-link>
      </form>
    </div>

    <div class="text-center">
      <p class="text-bold text-sm text-brand-gray-1">
        Don't have an account?
        <a href="#" class="font-bold text-brand-purple-1">Sign up</a>
      </p>
    </div>
  </div>
</template>

<script>
import ActionButton from "@/components/Shared/ActionButton.vue";
import InputField from "@/components/Shared/InputField.vue";
import TheCheckbox from "@/components/Shared/TheCheckbox.vue";

export default {
  name: "TheLogin",
  components: {
    ActionButton,
    InputField,
    TheCheckbox,
  },
};
</script>
