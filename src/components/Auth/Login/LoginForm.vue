<template>
  <form action="">
    <div class="mb-7">
      <label for="email" class="mb-1 block text-sm font-semibold text-brand-neutral-400">
        Email
      </label>
      <input-field
        id="email"
        v-model="email"
        type="email"
        placeholder="name@example.com"
        class="block w-full"
      />
    </div>

    <div class="mb-7">
      <label
        for="password"
        class="mb-1 block text-sm font-semibold text-brand-neutral-400"
      >
        Password
      </label>
      <input-field
        id="password"
        v-model="password"
        type="password"
        placeholder="min. 8 characters"
        class="block w-full"
      />
    </div>

    <div class="mb-10">
      <the-checkbox text="Keep me logged in" />
    </div>

    <action-button type="submit" text="Login" class="mb-6" />

    <router-link
      :to="{ name: 'RequestPassword' }"
      class="mx-auto block max-w-max text-sm font-bold text-brand-primary-500"
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
  data() {
    return {
      email: "",
      password: "",
    };
  },
};
</script>
