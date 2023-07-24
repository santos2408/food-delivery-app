<template>
  <div class="h-screen w-full md:flex">
    <section class="h-full flex-1 px-4 py-5 xl:w-[650px] xl:flex-initial">
      <forgot-password />
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
import LoginSwiper from "@/components/Login/LoginSwiper.vue";
import ForgotPassword from "@/components/Login/ForgotPassword.vue";

export default {
  name: "ForgotPasswordView",
  components: {
    ForgotPassword,
    LoginSwiper,
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
