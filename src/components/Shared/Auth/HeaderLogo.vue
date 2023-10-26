<template>
  <header class="w-full">
    <div class="inline-block">
      <a href="/" aria-label="Food Delivery Logo">
        <yumz-original-logo :color="color" />
      </a>
    </div>
  </header>
</template>

<script>
import YumzOriginalLogo from "@/assets/Icons/YumzOriginalLogo.vue";

export default {
  name: "HeaderLogo",
  components: {
    YumzOriginalLogo,
  },
  props: {
    color: {
      type: String,
      required: false,
      default: () => {
        return "";
      },
    },
  },
  mounted() {
    console.log(this.color);
  },
};
</script>
