<template>
  <div class="h-screen w-full md:flex">
    <section class="h-full flex-1 px-4 py-5 xl:w-[650px] xl:flex-initial">
      <the-login />
    </section>
    <info-cover v-if="isADesktopDevice" :screen-width="screenWidth" />
  </div>
</template>

<script>
import InfoCover from "@/components/Login/InfoCover.vue";
// import LoginSwiper from "@/components/Login/LoginSwiper.vue";
import TheLogin from "@/components/Login/TheLogin.vue";

export default {
  name: "LoginView",
  components: {
    TheLogin,
    InfoCover,
  },
  data() {
    return {
      screenWidth: window.innerWidth,
      isADesktopDevice: true,
    };
  },
  mounted() {
    window.addEventListener("resize", () => {
      this.screenWidth = window.innerWidth;
      this.isADesktopDevice = this.screenWidth > 768;
    });
  },
};
</script>
