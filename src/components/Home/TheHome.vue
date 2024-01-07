<template>
  <div class="">
    <header class="mb-16 2xl:container 2xl:mx-auto">
      <the-navigation />
    </header>
    <main class="2xl:container 2xl:mx-auto">
      <the-deals />

      <food-filters />

      <header-section :has-button="true" link="/restaurants">
        <template #title>Restaurantes</template>
        <template #button>Ver todos</template>
      </header-section>

      <restaurant-list></restaurant-list>
    </main>
    <the-footer />
  </div>
</template>

<script>
import FoodFilters from "@/components/Shared/FoodFilters.vue";
import HeaderSection from "@/components/Shared/HeaderSection.vue";
import TheNavigation from "@/components/Shared/Navigation/TheNavigation.vue";
import TheDeals from "@/components/Home/TheDeals.vue";
import RestaurantList from "@/components/Restaurants/RestaurantList.vue";
import TheFooter from "@/components/Shared/TheFooter.vue";

export default {
  name: "TheHome",
  components: {
    FoodFilters,
    HeaderSection,
    TheFooter,
    TheNavigation,
    TheDeals,
    RestaurantList,
  },
};
</script>
