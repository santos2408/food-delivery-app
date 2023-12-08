<template>
  <div class="">
    <header class="mb-16 2xl:container 2xl:mx-auto">
      <the-navigation />
    </header>
    <main class="2xl:container 2xl:mx-auto">
      <header-section :has-button="false">
        <template #title>Todos os restaurantes</template>
      </header-section>
      <food-filters />

      <div class="mb-2 px-4 lg:px-10 2xl:px-0">
        <span class="text-sm font-medium text-brand-neutral-400">
          {{ FILTERED_RESTAURANTS.length }} restaurantes encontrados
        </span>
      </div>
      <restaurant-list />
    </main>
    <the-footer />
  </div>
</template>

<script>
import { mapState } from "pinia";
import { useRestaurantsStore, FILTERED_RESTAURANTS } from "@/stores/restaurants";

import FoodFilters from "@/components/Shared/FoodFilters.vue";
import HeaderSection from "@/components/Shared/HeaderSection.vue";
import RestaurantList from "@/components/Home/Restaurants/RestaurantList.vue";
import TheNavigation from "@/components/Shared/Navigation/TheNavigation.vue";
import TheFooter from "@/components/Shared/TheFooter.vue";

export default {
  name: "TheHome",
  components: {
    FoodFilters,
    HeaderSection,
    RestaurantList,
    TheNavigation,
    TheFooter,
  },
  computed: {
    ...mapState(useRestaurantsStore, [FILTERED_RESTAURANTS]),
  },
};
</script>

<style scoped></style>
