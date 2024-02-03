<template>
  <header class="mb-12 2xl:container xl:mb-16 2xl:mx-auto">
    <the-navigation />
  </header>

  <main class="2xl:container 2xl:mx-auto">
    <header-section :has-button="false">
      <template #title>Todos os restaurantes</template>
    </header-section>

    <restaurant-list />
  </main>

  <the-footer />
</template>

<script>
import { mapState } from "pinia";

import { useRestaurantsStore, FILTERED_RESTAURANTS } from "@/stores/restaurants";

import HeaderSection from "@/components/Shared/HeaderSection.vue";
import RestaurantList from "@/components/Restaurants/RestaurantList.vue";
import TheNavigation from "@/components/Shared/Navigation/TheNavigation.vue";
import TheFooter from "@/components/Shared/TheFooter.vue";

export default {
  name: "TheRestaurants",
  components: {
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
