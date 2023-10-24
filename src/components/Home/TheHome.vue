<template>
  <div>
    <header class="container mx-auto">
      <the-navigation />
    </header>
  </div>
</template>

<script>
import TheNavigation from "@/components/Shared/TheNavigation.vue";

export default {
  name: "TheHome",
  components: {
    TheNavigation,
  },
};
</script>

<style scoped></style>
