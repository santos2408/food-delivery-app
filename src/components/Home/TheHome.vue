<template>
  <div class="2xl:container 2xl:mx-auto">
    <header class="mb-16">
      <the-navigation />
    </header>
    <main>
      <the-deals />
      <the-filter />
    </main>
  </div>
</template>

<script>
import TheNavigation from "@/components/Shared/Navigation/TheNavigation.vue";
import TheDeals from "@/components/Home/TheDeals.vue";
import TheFilter from "@/components/Shared/TheFilter.vue";

export default {
  name: "TheHome",
  components: {
    TheNavigation,
    TheDeals,
    TheFilter,
  },
};
</script>

<style scoped></style>
