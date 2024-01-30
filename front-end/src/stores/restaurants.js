import { defineStore } from "pinia";

import { useUserStore } from "@/stores/user";

import getRestaurants from "@/api/getRestaurants";

export const FETCH_RESTAURANTS = "FETCH_RESTAURANTS";
export const FILTERED_RESTAURANTS = "FILTERED_RESTAURANTS";
export const CLEAR_RESTAURANTS = "CLEAR_RESTAURANTS";
export const INCLUDE_RESTAURANTS_BY_TYPE = "INCLUDE_RESTAURANTS_BY_TYPE";

export const useRestaurantsStore = defineStore("restaurants", {
  state: () => ({
    restaurants: { data: [], hasNext: null },
  }),
  getters: {
    [INCLUDE_RESTAURANTS_BY_TYPE]: () => (restaurant) => {
      const userStore = useUserStore();
      console.log(userStore.selectedRestaurantTypes);
      if (userStore.selectedRestaurantTypes.length === 0) {
        return true;
      }
      return userStore.selectedRestaurantTypes.includes(restaurant);
    },
    [FILTERED_RESTAURANTS]: (state) => {
      return state.restaurants;
      // this.INCLUDE_RESTAURANTS_BY_TYPE("japonesa");
      // return state.restaurants.data.filter((restaurant) => {
      //   return this.INCLUDE_RESTAURANTS_BY_TYPE(restaurant);
      // });
    },
  },
  actions: {
    async [FETCH_RESTAURANTS](currentPage, category) {
      const restaurants = await getRestaurants(currentPage, category);

      this.restaurants = {
        data: [...this.restaurants.data, ...restaurants.data],
        hasNext: restaurants.hasNext,
      };
    },

    [CLEAR_RESTAURANTS]() {
      this.restaurants = { data: [], hasNext: null };
    },
  },
});
