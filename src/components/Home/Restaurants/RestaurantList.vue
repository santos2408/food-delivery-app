<template>
  <section class="mb-16 px-4 lg:px-10 2xl:px-0">
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
      class="mb-8 grid grid-cols-[minmax(328px,_1fr)] gap-4 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4"
    >
      <restaurant-listing
        v-for="restaurant in restaurants"
        :key="restaurant.id"
        :value="restaurant"
      />
    </ul>

    <div v-if="showSeeMore" class="flex justify-center">
      <div v-if="loading" class="loader my-5">
        <span class="ball"></span>
        <span class="ball"></span>
        <span class="ball"></span>
      </div>

      <action-button
        v-else
        type="button"
        text="Ver mais"
        style-type="secondary"
        class="rounded-lg"
        @click="showMore"
      />
    </div>
  </section>
</template>

<script>
import getRestaurants from "@/api/getRestaurants";

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
      currentPage: 1,
      loading: false,
      showSeeMore: true,
    };
  },
  async mounted() {
    this.restaurants = await getRestaurants();
  },
  methods: {
    async showMore() {
      this.currentPage = this.currentPage + 1;

      const restaurants = await getRestaurants(this.currentPage);

      this.loading = true;

      if (restaurants.length === 0) {
        this.loading = false;
        this.showSeeMore = false;
        return;
      }

      setTimeout(() => {
        this.restaurants = [...this.restaurants, ...restaurants];
        this.loading = false;
      }, 1000);
    },
  },
};
</script>

<style scoped>
.loader {
  width: 50px;
  display: flex;
  justify-content: space-evenly;
}

.ball {
  list-style: none;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: #ff2851;
  opacity: 0.6;
}

.ball:nth-child(1) {
  animation: bounce-1 0.4s ease-in-out infinite;
}

@keyframes bounce-1 {
  50% {
    transform: translateY(-3px);
  }
}

.ball:nth-child(2) {
  animation: bounce-3 0.4s ease-in-out 0.1s infinite;
}

@keyframes bounce-2 {
  50% {
    transform: translateY(-3px);
  }
}

.ball:nth-child(3) {
  animation: bounce-3 0.4s ease-in-out 0.2s infinite;
}

@keyframes bounce-3 {
  50% {
    transform: translateY(-3px);
  }
}
</style>
