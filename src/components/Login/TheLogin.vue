<template>
  <div class="h-screen w-full md:flex">
    <section class="h-full flex-1 px-4 py-5 xl:w-[650px] xl:flex-initial">
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
              <label
                for="email"
                class="mb-1 block text-sm font-semibold text-brand-gray-1"
                >Email</label
              >
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
                >Password</label
              >
              <input-field
                id="password"
                type="email"
                placeholder="min. 8 characters"
                class="block w-full rounded-lg border-[1px] p-3 placeholder:text-sm placeholder:text-brand-gray-2 focus-visible:outline-brand-purple-1"
              />
            </div>

            <div class="mb-10">
              <label
                for="keep-login"
                class="flex items-center gap-3 text-sm text-brand-dark-1"
              >
                <input id="keep-login" type="checkbox" />
                Keep me logged in
              </label>
            </div>

            <button
              type="submit"
              class="mb-7 w-full rounded-lg bg-brand-purple-1 px-4 py-3 text-sm font-bold text-white shadow-purple transition duration-300 ease-in-out hover:bg-brand-purple-2"
            >
              Login
            </button>
            <a
              href="#"
              class="mx-auto block max-w-max text-sm font-bold text-brand-purple-1"
            >
              Forgot password
            </a>
          </form>
        </div>

        <div class="text-center">
          <p class="text-bold text-sm text-brand-gray-1">
            Don't have an account?
            <a href="#" class="font-bold text-brand-purple-1">Sign up</a>
          </p>
        </div>
      </div>
    </section>

    <div
      v-if="isADesktopDevice"
      class="hidden flex-1 justify-center bg-brand-purple-3 md:block"
    >
      <div class="h-full md:flex md:flex-col xl:justify-center xl:gap-10 2xl:gap-5">
        <div class="relative h-[75%] overflow-hidden xl:h-auto">
          <img
            :src="getCoverImage"
            class="absolute left-4 mx-auto w-[655px] max-w-none xl:relative xl:w-[920px] xl:max-w-full"
            alt="Login cover image"
          />
        </div>
        <login-swiper />
      </div>
    </div>
  </div>
</template>

<script>
import InputField from "@/components/Shared/InputField.vue";
import LoginSwiper from "@/components/Login/LoginSwiper.vue";

export default {
  name: "TheLogin",
  components: {
    LoginSwiper,
    InputField,
  },
  data() {
    return {
      screenWidth: window.innerWidth,
      shouldChangeCoverImage: true,
      isADesktopDevice: true,
    };
  },
  computed: {
    getCoverImage() {
      const isAMobileDevice = this.screenWidth >= 768 && this.screenWidth <= 1280;
      return isAMobileDevice
        ? new URL(`@/assets/Login/login-cover-tablet.png`, import.meta.url).href
        : new URL(`@/assets/Login/login-cover-desktop.png`, import.meta.url).href;
    },
  },
  mounted() {
    window.addEventListener("resize", () => {
      this.screenWidth = window.innerWidth;
      this.shouldChangeCoverImage = this.screenWidth <= 1280 ? true : false;
      this.isADesktopDevice = this.screenWidth > 768 ? true : false;
    });
  },
};
</script>
