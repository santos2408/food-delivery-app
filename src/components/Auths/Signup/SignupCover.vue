<template>
  <div class="relative flex-1 bg-brand-purple-3">
    <div class="relative flex overflow-hidden px-10 pb-10 pt-5">
      <div class="max-w-sm">
        <header-logo color="#fff" class="mb-16" />
        <h2 class="mb-5 text-3xl font-bold text-white">
          A few steps to create your restaurant or personal account
        </h2>
        <p class="text-sm text-white">
          Join our vibrant food community in just a few clicks! Your culinary journey
          begins here.
        </p>
      </div>
      <img
        :src="getCoverImage"
        class="absolute -right-[520px] -top-[295px] max-w-[900px] -rotate-[12deg] xl:relative xl:left-0 xl:max-w-full"
        alt="Login cover image"
      />
    </div>
  </div>
</template>

<script>
import HeaderLogo from "@/components/Shared/Auths/HeaderLogo.vue";

export default {
  name: "SignupCover",
  components: {
    HeaderLogo,
  },
  props: {
    screenWidth: {
      type: Number,
      required: true,
    },
  },
  computed: {
    getCoverImage() {
      const isAMobileDevice = this.screenWidth <= 1280;
      return isAMobileDevice
        ? new URL(`@/assets/Signup/signup-cover-tablet.png`, import.meta.url).href
        : new URL(`@/assets/Signup/signup-cover-desktop.png`, import.meta.url).href;
    },
  },
};
</script>
