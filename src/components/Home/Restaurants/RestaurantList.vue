<template>
  <section class="px-4 lg:px-10 2xl:px-0">
    <div class="mb-5 flex items-center justify-between">
      <h2 class="text-3xl font-bold text-brand-neutral-500">Restaurantes</h2>
      <router-link
        to="/"
        class="rounded-full border-[1px] border-brand-primary-500 px-5 py-3 text-xsm font-bold uppercase text-brand-primary-500 transition duration-150 hover:bg-brand-primary-500 hover:text-white"
      >
        Ver todos
      </router-link>
    </div>

    <ul
      class="mb-6 grid grid-cols-[minmax(328px,_1fr)] gap-4 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4"
    >
      <restaurant-listing
        v-for="restaurant in restaurants"
        :key="restaurant.id"
        :value="restaurant"
      />
    </ul>

    <div class="mb-16 flex justify-center">
      <action-button type="button" text="Ver mais" style-type="secondary" class="rounded-lg" />
    </div>
  </section>
</template>

<script>
import axios from "axios";

import RestaurantListing from "@/components/Home/Restaurants/RestaurantListing.vue";
import ActionButton from "@/components/Shared/ActionButton.vue";

export default {
  name: "TheRestaurants",
  components: {
    RestaurantListing,
    ActionButton,
  },
  data() {
    return {
      restaurants: [],
    };
  },
  async mounted() {
    try {
      const response = await axios.get("http://localhost:3004/restaurants");
      this.restaurants = response.data;
    } catch (error) {
      console.log(error);
    }
  },
};
</script>
