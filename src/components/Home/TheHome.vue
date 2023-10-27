<template>
  <div>
    <header class="2xl:container xl:px-10 2xl:mx-auto">
      <the-navigation />
    </header>
  </div>
</template>

<script>
import TheNavigation from "@/components/Shared/Navigation/TheNavigation.vue";

export default {
  name: "TheHome",
  components: {
    TheNavigation,
  },
};
</script>

<style scoped></style>
