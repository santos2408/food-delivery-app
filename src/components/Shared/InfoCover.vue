<template>
  <div
    class="hidden flex-1 justify-center overflow-hidden bg-brand-purple-3 px-4 md:block"
  >
    <div class="flex h-full flex-col justify-center xl:gap-10">
      <div
        class="relative mt-4 h-[600px] xl:flex xl:h-auto xl:max-w-[900px] xl:self-center"
      >
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
import LoginSwiper from "@/components/Shared/LoginSwiper.vue";

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
        : new URL(`@/assets/Login/login-cover-desktop.png`, import.meta.url)
            .href;
    },
  },
};
</script>
