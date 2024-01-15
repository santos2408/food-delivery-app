<template>
  <header class="mb-12 2xl:container xl:mb-16 2xl:mx-auto">
    <the-navigation />
  </header>

  <main class="2xl:container 2xl:mx-auto">
    <search-section>
      <span class="text-brand-primary-500">Descubra</span> <br />
      Novos Sabores
    </search-section>

    <header-section :has-button="false">
      <template #title>Todos os restaurantes</template>
    </header-section>

    <food-filters class="xl:mb-12" />

    <div class="mb-2 px-4 lg:px-10 2xl:px-0">
      <span class="text-sm font-medium text-brand-neutral-400">
        {{ FILTERED_RESTAURANTS.data.length }} restaurantes encontrados
      </span>
    </div>

    <restaurant-list />
  </main>

  <the-footer />
</template>

<script>
import { mapState } from "pinia";
import { useRestaurantsStore, FILTERED_RESTAURANTS } from "@/stores/restaurants";

import SearchSection from "@/components/Shared/SearchSection.vue";
import FoodFilters from "@/components/Shared/FoodFilters.vue";
import HeaderSection from "@/components/Shared/HeaderSection.vue";
import RestaurantList from "@/components/Restaurants/RestaurantList.vue";
import TheNavigation from "@/components/Shared/Navigation/TheNavigation.vue";
import TheFooter from "@/components/Shared/TheFooter.vue";

export default {
  name: "TheRestaurants",
  components: {
    SearchSection,
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
