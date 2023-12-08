import { defineStore } from "pinia";

export const FETCH_RESTAURANTS = "FETCH_RESTAURANTS";
export const FILTERED_RESTAURANTS = "FILTERED_RESTAURANTS";

import getRestaurants from "@/api/getRestaurants";

export const useRestaurantsStore = defineStore("restaurants", {
  state: () => ({
    restaurants: [],
  }),
  getters: {
    [FILTERED_RESTAURANTS]: (state) => {
      return state.restaurants;
    },
  },
  actions: {
    async [FETCH_RESTAURANTS](currentPage) {
      const restaurants = await getRestaurants(currentPage);
      this.restaurants = [...this.restaurants, ...restaurants];
    },
  },
});
