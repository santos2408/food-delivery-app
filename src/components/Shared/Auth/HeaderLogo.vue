<template>
  <header class="w-full">
    <div class="inline-block">
      <router-link to="/" aria-label="Food Delivery Logo">
        <img
          src="@/assets/Icons/yumz/yumz-logo-1.png"
          class="w-24"
          alt="Yumz! Food Delivery Logo"
        />
      </router-link>
    </div>
  </header>
</template>

<script>
export default {
  name: "HeaderLogo",
  props: {
    color: {
      type: String,
      required: false,
      default: () => {
        return "";
      },
    },
  },
};
</script>
