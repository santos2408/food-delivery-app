<template>
  <div class="">
    <header class="mb-16 2xl:container 2xl:mx-auto">
      <the-navigation />
    </header>
    <main class="2xl:container 2xl:mx-auto">
      <the-deals />
      <food-filters />
      <restaurant-list />
    </main>
    <the-footer />
  </div>
</template>

<script>
import TheNavigation from "@/components/Shared/Navigation/TheNavigation.vue";
import TheDeals from "@/components/Home/TheDeals.vue";
import FoodFilters from "@/components/Shared/FoodFilters.vue";
import RestaurantList from "@/components/Home/Restaurants/RestaurantList.vue";
import TheFooter from "@/components/Shared/TheFooter.vue";

export default {
  name: "TheHome",
  components: {
    TheNavigation,
    TheDeals,
    FoodFilters,
    RestaurantList,
    TheFooter,
  },
};
</script>

<style scoped></style>
