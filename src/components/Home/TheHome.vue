<template>
  <header class="mb-12 2xl:container xl:mb-16 2xl:mx-auto">
    <the-navigation />
  </header>

  <main class="2xl:container 2xl:mx-auto">
    <div class="px-4 xl:px-0">
      <h1 class="mb-6 text-center text-4xl font-bold leading-tight xl:text-6xl">
        Encontre o <br />
        <span class="text-brand-primary-500">Restaurante</span> Perfeito
      </h1>

      <search-restaurants class="xl:mb-20" />
    </div>

    <the-deals />

    <food-filters class="mb-12" />

    <header-section :has-button="true" link="/restaurantes">
      <template #title>Restaurantes</template>
      <template #button>Ver todos</template>
    </header-section>

    <restaurant-list />
  </main>

  <the-footer />
</template>

<script>
import SearchRestaurants from "@/components/Shared/SearchRestaurants.vue";
import FoodFilters from "@/components/Shared/FoodFilters.vue";
import HeaderSection from "@/components/Shared/HeaderSection.vue";
import TheNavigation from "@/components/Shared/Navigation/TheNavigation.vue";
import TheDeals from "@/components/Home/TheDeals.vue";
import RestaurantList from "@/components/Restaurants/RestaurantList.vue";
import TheFooter from "@/components/Shared/TheFooter.vue";

export default {
  name: "TheHome",
  components: {
    SearchRestaurants,
    FoodFilters,
    HeaderSection,
    TheFooter,
    TheNavigation,
    TheDeals,
    RestaurantList,
  },
};
</script>
