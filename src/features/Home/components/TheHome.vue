<template>
  <header class="mb-12 2xl:container xl:mb-16 2xl:mx-auto">
    <the-navigation />
  </header>

  <main class="2xl:container 2xl:mx-auto">
    <search-section class="mb-12">
      Encontre o <br />
      <span class="text-brand-primary-500">Restaurante</span> Perfeito
    </search-section>

    <the-deals />

    <food-filters class="mb-12" />

    <header-section :has-button="true" link="/restaurants">
      <template #title>Restaurantes</template>
      <template #button>Ver todos</template>
    </header-section>

    <restaurant-list />
  </main>

  <the-footer />
</template>

<script>
import SearchSection from "@/components/SearchSection.vue";
import FoodFilters from "@/components/FoodFilters.vue";
import HeaderSection from "@/components/HeaderSection.vue";
import TheNavigation from "@/components/Navigation/TheNavigation.vue";
import TheDeals from "@/features/Home/components/TheDeals.vue";
import RestaurantList from "@/features/Restaurants/components/RestaurantList.vue";
import TheFooter from "@/components/TheFooter.vue";

export default {
  name: "TheHome",
  components: {
    SearchSection,
    FoodFilters,
    HeaderSection,
    TheFooter,
    TheNavigation,
    TheDeals,
    RestaurantList,
  },
};
</script>
