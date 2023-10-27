<template>
  <div
    class="relative flex-1 bg-gradient-to-t from-brand-primary-500 to-brand-secondary-500"
  >
    <div
      class="relative flex h-full items-center overflow-hidden p-10 pt-5 xl:flex-col xl:justify-center"
    >
      <div class="max-w-sm xl:order-2 xl:text-center">
        <header-logo v-if="handleLogoVisibility" :color="handleLogoColor" class="mb-32" />
        <h2
          class="mb-4 text-4xl font-bold leading-[120%] text-white xl:text-center xl:text-3xl"
        >
          Poucas etapas para criar sua conta pessoal ou de restaurante
        </h2>
        <p class="mx-auto text-base text-white xl:text-center">
          Junte-se à nossa vibrante comunidade gastronômica com apenas alguns cliques!
        </p>
      </div>
      <img
        :src="getCoverImage"
        class="absolute -right-[280px] -top-[210px] max-w-[670px] lg:-right-[10px] lg:-top-[160px] lg:max-w-[600px] xl:relative xl:left-auto xl:right-auto xl:top-auto xl:order-1 xl:max-w-[700px] 2xl:max-w-[820px]"
        alt="Login cover image"
      />
    </div>
  </div>
</template>

<script>
import HeaderLogo from "@/components/Shared/Auth/HeaderLogo.vue";

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
    handleLogoVisibility() {
      return this.screenWidth >= 1280 ? false : true;
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
