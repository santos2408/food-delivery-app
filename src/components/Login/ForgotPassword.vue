<template>
  <div class="mx-auto flex h-full max-w-sm flex-col justify-between">
    <header class="w-full">
      <div class="inline-block">
        <router-link to="/">
          <img src="../../assets/Shared/food-delivery-logo.svg" alt="Food Delivery" />
        </router-link>
      </div>
    </header>

    <div>
      <router-link
        to="/login"
        class="mb-14 flex items-center gap-4 font-semibold text-brand-gray-1"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="9"
          height="14"
          viewBox="0 0 9 14"
          fill="none"
        >
          <path
            d="M7 2L2 7L7 12"
            stroke="#545563"
            stroke-width="2.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        Back to login
      </router-link>

      <h1 class="mb-10 text-5xl font-bold text-brand-dark-1">Forgot password</h1>
      <p class="mb-8 text-sm text-brand-gray-1">
        Enter the email associated with your account and we’ll send an email with
        instructions to reset your password.
      </p>

      <form action="">
        <div class="mb-7">
          <label for="email" class="mb-1 block text-sm font-semibold text-brand-gray-1"
            >Email</label
          >
          <input-field
            id="email"
            type="email"
            placeholder="name@example.com"
            class="block w-full rounded-lg border-[1px] p-3 placeholder:text-sm placeholder:text-brand-gray-2 focus-visible:outline-brand-purple-1"
          />
        </div>

        <action-button type="submit" text="Send instructions" />
      </form>
    </div>

    <div class="text-center">
      <p class="text-bold text-sm text-brand-gray-1">
        Do you have any questions?
        <a href="#" class="font-bold text-brand-purple-1">FAQ</a>
      </p>
    </div>
  </div>
</template>

<script>
import ActionButton from "@/components/Shared/ActionButton.vue";
import InputField from "@/components/Shared/InputField.vue";

export default {
  name: "ForgotPassword",
  components: {
    ActionButton,
    InputField,
  },
};
</script>
