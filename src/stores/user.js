import { defineStore } from "pinia";

export const ADD_SELECTED_RESTAURANT_TYPE = "ADD_SELECTED_RESTAURANT_TYPE";

export const useUserStore = defineStore("user", {
  state: () => ({
    isLoggedIn: false,
    selectedRestaurantTypes: null,
  }),
  actions: {
    [ADD_SELECTED_RESTAURANT_TYPE](restaurantType) {
      this.selectedRestaurantTypes = restaurantType;
    },
    login() {
      this.isLoggedIn = !this.isLoggedIn;
    },
  },
});
