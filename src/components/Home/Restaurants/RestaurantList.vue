<template>
  <section class="mb-16 px-4 lg:px-10 2xl:px-0">
    <restaurant-list-content-loader v-show="contentLoading" />

    <ul
      v-show="!contentLoading"
      class="mb-8 grid grid-cols-[minmax(328px,_1fr)] gap-4 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4"
    >
      <restaurant-listing
        v-for="restaurant in FILTERED_RESTAURANTS"
        :key="restaurant.id"
        :value="restaurant"
      />
    </ul>

    <div v-if="showSeeMore" class="flex justify-center">
      <div v-if="loadindMore" class="loader my-5">
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
import { mapState, mapActions } from "pinia";
import {
  useRestaurantsStore,
  FETCH_RESTAURANTS,
  FILTERED_RESTAURANTS,
} from "@/stores/restaurants";

import ActionButton from "@/components/Shared/ActionButton.vue";
import RestaurantListing from "@/components/Home/Restaurants/RestaurantListing.vue";
import RestaurantListContentLoader from "@/assets/Loaders/ContentLoaders/RestaurantListContentLoader.vue";

export default {
  name: "TheRestaurants",
  components: {
    ActionButton,
    RestaurantListing,
    RestaurantListContentLoader,
  },
  data() {
    return {
      restaurants: [],
      currentPage: 1,
      loadindMore: false,
      showSeeMore: true,
      contentLoading: true,
    };
  },
  computed: {
    ...mapState(useRestaurantsStore, [FILTERED_RESTAURANTS]),
  },
  async mounted() {
    if (this.FILTERED_RESTAURANTS.length) {
      this.contentLoading = false;
      return;
    }

    this.FETCH_RESTAURANTS();
    this.contentLoading = false;
  },
  methods: {
    ...mapActions(useRestaurantsStore, [FETCH_RESTAURANTS]),
    async showMore() {
      this.currentPage = this.currentPage + 1;
      this.loadindMore = true;

      // if (restaurants.length === 0) {
      //   this.loadindMore = false;
      //   this.showSeeMore = false;
      //   return;
      // }

      setTimeout(() => {
        this.FETCH_RESTAURANTS(this.currentPage);
        this.loadindMore = false;
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
