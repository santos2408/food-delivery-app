import { defineStore } from "pinia";

export const useSwiperStore = defineStore("swiper", {
  state: () => ({
    slideIndex: 0,
  }),
  actions: {
    updateIndex(index) {
      this.slideIndex = index;
    },
  },
});
