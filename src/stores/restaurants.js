import { defineStore } from "pinia";

export const FETCH_RESTAURANTS = "FETCH_RESTAURANTS";
export const FILTERED_RESTAURANTS = "FILTERED_RESTAURANTS";

import getRestaurants from "@/api/getRestaurants";

export const useRestaurantsStore = defineStore("restaurants", {
  state: () => ({
    filteredRestaurants: {},
  }),
  getters: {
    [FILTERED_RESTAURANTS]: (state) => {
      return state.restaurants;
    },
  },
  actions: {
    async [FETCH_RESTAURANTS](currentPage) {
      const restaurants = await getRestaurants(currentPage);

      if (!this.restaurants.data) {
        this.restaurants = { ...restaurants };
        return;
      }

      this.restaurants = {
        data: [...this.restaurants.data, ...restaurants.data],
        hasNext: restaurants.hasNext,
      };
    },
  },
});
