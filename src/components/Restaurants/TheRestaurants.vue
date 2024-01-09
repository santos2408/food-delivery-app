<template>
  <header class="mb-16 2xl:container 2xl:mx-auto">
    <the-navigation />
  </header>

  <main class="2xl:container 2xl:mx-auto">
    <div>
      <h1 class="mb-6 text-center text-6xl font-bold leading-tight">
        <span class="text-brand-primary-500">Descubra</span> <br />
        Novos Sabores
      </h1>

      <search-restaurants class="xl:mb-20" />
    </div>

    <header-section :has-button="false">
      <template #title>Todos os restaurantes</template>
    </header-section>

    <food-filters class="xl:mb-12" />

    <div class="mb-2 px-4 lg:px-10 2xl:px-0">
      <span class="text-sm font-medium text-brand-neutral-400">
        {{ restaurantsAmount }} restaurantes encontrados
      </span>
    </div>

    <restaurant-list @restaurants-amount="updatedRestaurantsAmount" />
  </main>

  <the-footer />
</template>

<script>
import SearchRestaurants from "@/components/Shared/SearchRestaurants.vue";
import FoodFilters from "@/components/Shared/FoodFilters.vue";
import HeaderSection from "@/components/Shared/HeaderSection.vue";
import RestaurantList from "@/components/Restaurants/RestaurantList.vue";
import TheNavigation from "@/components/Shared/Navigation/TheNavigation.vue";
import TheFooter from "@/components/Shared/TheFooter.vue";

export default {
  name: "TheRestaurants",
  components: {
    SearchRestaurants,
    FoodFilters,
    HeaderSection,
    RestaurantList,
    TheNavigation,
    TheFooter,
  },
  data() {
    return {
      restaurantsAmount: 0,
    };
  },
  methods: {
    updatedRestaurantsAmount(event) {
      this.restaurantsAmount = event;
    },
  },
};
</script>
