<template>
  <div class="min-h-screen w-full md:flex">
    <the-login />
    <info-cover v-if="isADesktopDevice" :screen-width="screenWidth" />
  </div>
</template>

<script>
import InfoCover from "@/components/Shared/InfoCover.vue";
import TheLogin from "@/components/Auth/Login/TheLogin.vue";

export default {
  name: "LoginView",
  components: {
    TheLogin,
    InfoCover,
  },
  data() {
    return {
      screenWidth: window.innerWidth,
      screenHeight: window.innerHeight,
      isADesktopDevice: true,
    };
  },
  mounted() {
    window.addEventListener("resize", () => {
      this.screenWidth = window.innerWidth;
      this.screenHeight = document.body.scrollHeight;
      this.isADesktopDevice = this.screenWidth > 768;
      console.log(this.screenHeight);
    });
  },
};
</script>
