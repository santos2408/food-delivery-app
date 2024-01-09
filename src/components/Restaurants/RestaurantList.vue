<template>
  <section class="mb-16 px-4 lg:px-10 2xl:px-0">
    <restaurant-list-content-loader v-show="contentLoading" />

    <ul
      v-show="!contentLoading"
      class="mb-8 grid grid-cols-[minmax(328px,_1fr)] gap-4 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4"
    >
      <restaurant-listing
        v-for="restaurant in restaurants.data"
        :key="restaurant.id"
        :value="restaurant"
      />
    </ul>

    <div v-if="hasMoreRestaurants" class="mb-16 flex justify-center">
      <div v-show="loadingMore" class="loader my-5">
        <span class="ball"></span>
        <span class="ball"></span>
        <span class="ball"></span>
      </div>

      <action-button
        v-show="!loadingMore"
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

import RestaurantListing from "@/components/Restaurants/RestaurantListing.vue";
import RestaurantListContentLoader from "@/assets/Loaders/ContentLoaders/RestaurantListContentLoader.vue";
import ActionButton from "@/components/Shared/ActionButton.vue";

export default {
  name: "RestaurantList",
  components: {
    RestaurantListing,
    RestaurantListContentLoader,
    ActionButton,
  },

  emits: ["restaurants-amount"],

  data() {
    return {
      restaurants: { data: [], hasNext: null },
      currentPage: 1,
      loadingMore: false,
      contentLoading: true,
      hasMoreRestaurants: true,
    };
  },

  async mounted() {
    await this.loadRestaurants(this.currentPage);
    this.$emit("restaurants-amount", this.restaurants.data.length);
    this.contentLoading = false;
  },

  methods: {
    async loadRestaurants(currentPage) {
      const restaurants = await getRestaurants(currentPage);

      this.restaurants = {
        data: [...this.restaurants.data, ...restaurants.data],
        hasNext: restaurants.hasNext,
      };
    },

    async showMore() {
      this.currentPage = this.currentPage + 1;
      this.loadingMore = true;

      await this.loadRestaurants(this.currentPage);
      this.$emit("restaurants-amount", this.restaurants.data.length);

      this.hasMoreRestaurants = this.restaurants.hasNext;
      this.loadingMore = false;
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
