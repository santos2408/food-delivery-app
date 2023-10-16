<template>
  <header class="w-full">
    <div class="inline-block">
      <a href="/" aria-label="Food Delivery Logo">
        <yumz-original-logo />
      </a>
    </div>
  </header>
</template>

<script>
import YumzOriginalLogo from "@/assets/icons/YumzOriginalLogo.vue";

export default {
  name: "HeaderLogo",
  components: {
    YumzOriginalLogo,
  },
};
</script>
