<template>
  <form action="">
    <div class="mb-7">
      <label for="email" class="mb-1 block text-sm font-semibold text-brand-gray-1">
        Email
      </label>
      <input-field
        id="email"
        type="email"
        placeholder="name@example.com"
        class="login-input"
      />
    </div>

    <div class="mb-7">
      <label for="password" class="mb-1 block text-sm font-semibold text-brand-gray-1">
        Password
      </label>
      <input-field
        id="password"
        type="email"
        placeholder="min. 8 characters"
        class="login-input"
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
</template>

<script>
import ActionButton from "@/components/Shared/ActionButton.vue";
import InputField from "@/components/Shared/InputField.vue";
import TheCheckbox from "@/components/Shared/TheCheckbox.vue";

export default {
  name: "LoginForm",
  components: {
    InputField,
    ActionButton,
    TheCheckbox,
  },
};
</script>

<style scoped>
.login-input {
  @apply block w-full rounded-lg border-[1px] border-brand-gray-3 p-3 placeholder:text-sm placeholder:text-brand-gray-2 focus-visible:outline-brand-purple-1;
}
</style>
