<template>
  <main class="h-screen flex-1 px-4 py-5 xl:w-[650px] xl:flex-initial">
    <div class="mx-auto flex h-full max-w-sm flex-col">
      <header-logo class="mb-10" />

      <div class="h-full">
        <signup-progress class="mb-16" />

        <div class="mb-10">
          <h1 class="mb-5 text-5xl font-bold text-brand-dark-1">Sign up</h1>
          <p class="mb-8 text-sm text-brand-gray-1">
            Register to create your restaurant or personal account
          </p>
        </div>

        <div class="mb-10 flex flex-col gap-3">
          <button
            class="w-full rounded-2xl border-[1px] border-brand-gray-3 p-4 placeholder:text-sm placeholder:text-brand-gray-2 focus-visible:outline-brand-purple-1"
          >
            <div class="flex flex-nowrap items-center gap-4">
              <div
                class="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-gray-4"
              >
                <ShoppingBag color="#c7c8d2" size="20" />
              </div>
              <div class="text-left">
                <h2 class="text-base font-bold text-brand-dark-1">
                  Restaurant
                </h2>
                <p class="text-sm text-brand-gray-2">
                  Manage your own restaurant
                </p>
              </div>
            </div>
          </button>

          <button
            class="w-full rounded-2xl border-[1px] border-brand-gray-3 p-4 placeholder:text-sm placeholder:text-brand-gray-2 focus-visible:outline-brand-purple-1"
          >
            <div class="flex flex-nowrap items-center gap-4">
              <div
                class="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-gray-4"
              >
                <User color="#c7c8d2" size="20" />
              </div>
              <div class="text-left">
                <h2 class="text-base font-bold text-brand-dark-1">
                  Restaurant
                </h2>
                <p class="text-sm text-brand-gray-2">
                  Manage your own restaurant
                </p>
              </div>
            </div>
          </button>
        </div>

        <action-button type="button" text="Continue" />
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
import { ShoppingBag, User } from "lucide-vue-next";
import ActionButton from "@/components/Shared/ActionButton.vue";
import HeaderLogo from "@/components/Shared/Auths/HeaderLogo.vue";
import SignupProgress from "@/components/Auths/Signup/SignupProgress.vue";

export default {
  name: "TheSignup",
  components: {
    ActionButton,
    HeaderLogo,
    SignupProgress,
    ShoppingBag,
    User,
  },
};
</script>

<style scoped></style>
