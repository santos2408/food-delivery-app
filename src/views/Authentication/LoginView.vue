<template>
  <div class="h-screen w-full md:flex">
    <the-login />
    <info-cover v-if="isADesktopDevice" :screen-width="screenWidth" />
  </div>
</template>

<script>
import InfoCover from "@/components/Shared/InfoCover.vue";
import TheLogin from "@/components/Auths/Login/TheLogin.vue";

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
