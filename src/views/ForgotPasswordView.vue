<template>
  <div class="h-screen w-full md:flex">
    <forgot-password />
    <info-cover v-if="isADesktopDevice" :screen-width="screenWidth" />
  </div>
</template>

<script>
import InfoCover from "@/components/Shared/InfoCover.vue";
import ForgotPassword from "@/components/ForgotPassword/ForgotPassword.vue";

export default {
  name: "ForgotPasswordView",
  components: {
    InfoCover,
    ForgotPassword,
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
      this.shouldChangeCoverImage = this.screenWidth <= 1280 ? true : false;
      this.isADesktopDevice = this.screenWidth > 768 ? true : false;
    });
  },
};
</script>
