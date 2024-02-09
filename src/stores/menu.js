import { defineStore } from "pinia";

export const useMenuStore = defineStore("menu", {
  state: () => ({
    menuActive: false,
  }),
  actions: {
    toggleMenu(event) {
      const clickedElement = event.target;
      const menuItem = clickedElement.tagName === "A" || clickedElement.tagName === "LI";
      const closeButton = clickedElement.closest("button");
      const clickOutside = clickedElement.dataset.js === "menu-outside";
      const menuShouldBeToggled = menuItem || closeButton || clickOutside;

      console.log(menuItem, closeButton, clickOutside);

      if (clickOutside && !this.menuActive) {
        return;
      }

      if (menuShouldBeToggled) {
        this.menuActive = !this.menuActive;
      }
    },
  },
});
