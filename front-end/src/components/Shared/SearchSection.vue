<template>
  <div class="px-4 xl:px-0">
    <h1 class="mb-6 text-center text-4xl font-bold leading-tight xl:text-6xl">
      <slot></slot>
    </h1>

    <search-restaurants class="xl:mb-20" />
  </div>
</template>

<script>
import SearchRestaurants from "@/components/Shared/SearchRestaurants.vue";

export default {
  name: "SearchSection",
  components: {
    SearchRestaurants,
  },
};
</script>
