<template>
  <div class="h-full w-full flex-col md:flex md:h-screen">
    <signup-cover v-if="isADesktopDevice" :screen-width="screenWidth" />
    <the-signup />
  </div>
</template>

<script>
import TheSignup from "@/components/Auths/Signup/TheSignup.vue";
import SignupCover from "@/components/Auths/Signup/SignupCover.vue";

export default {
  name: "SignupView",
  components: {
    TheSignup,
    SignupCover,
  },
  data() {
    return {
      screenWidth: window.innerWidth,
      isADesktopDevice: null,
    };
  },
  mounted() {
    this.isADesktopDevice = this.screenWidth > 767 ? true : false;

    window.addEventListener("resize", () => {
      this.screenWidth = window.innerWidth;
      this.isADesktopDevice = this.screenWidth > 767;
    });
  },
};
</script>
