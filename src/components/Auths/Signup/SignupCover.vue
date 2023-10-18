<template>
  <div
    class="relative flex-1 bg-gradient-to-t from-brand-primary-500 to-brand-secondary-500"
  >
    <div
      class="relative flex h-full items-center overflow-hidden p-10 pt-5 xl:flex-col xl:justify-center"
    >
      <div class="max-w-sm xl:order-2 xl:text-center">
        <header-logo :color="handleLogoColor" class="mb-32 xl:hidden" />
        <h2
          class="mb-4 text-4xl font-bold leading-[120%] text-white lg:text-3xl xl:text-center"
        >
          A few steps to create your restaurant or personal account
        </h2>
        <p class="mx-auto text-base text-white xl:text-center">
          Join our vibrant food community in just a few clicks! Your culinary journey
          begins here.
        </p>
      </div>
      <img
        :src="getCoverImage"
        class="absolute -right-[280px] -top-[210px] max-w-[670px] lg:-right-[40px] lg:-top-[210px] lg:max-w-[600px] xl:relative xl:left-auto xl:right-auto xl:top-auto xl:order-1 xl:max-w-[700px] 2xl:max-w-[820px]"
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
    handleLogoColor() {
      return this.screenWidth < 1280 ? "#fff" : undefined;
    },
    getCoverImage() {
      const isAMobileDevice = this.screenWidth <= 1280;
      return isAMobileDevice
        ? new URL(`@/assets/Signup/signup-cover-tablet.png`, import.meta.url).href
        : new URL(`@/assets/Signup/signup-cover-desktop.png`, import.meta.url).href;
    },
  },
};
</script>
