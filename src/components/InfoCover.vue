<template>
  <div
    class="hidden min-h-[745px] flex-1 justify-center overflow-hidden bg-gradient-to-t from-brand-primary-500 to-brand-secondary-500 px-4 md:block"
  >
    <div class="flex h-full flex-col justify-center">
      <div class="relative h-[600px] xl:flex xl:h-auto xl:self-center">
        <img
          :src="getCoverImage"
          class="absolute left-3 max-w-[650px] xl:relative xl:left-0 xl:max-w-full"
          alt="Login cover image"
        />
      </div>
      <login-swiper />
    </div>
  </div>
</template>

<script>
import LoginSwiper from "@/features/Auth/components/Login/LoginSwiper.vue";

export default {
  name: "InfoCover",
  components: {
    LoginSwiper,
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
        ? new URL(`@/assets/Login/login-cover-tablet.png`, import.meta.url).href
        : new URL(`@/assets/Login/login-cover-desktop.png`, import.meta.url).href;
    },
  },
};
</script>
