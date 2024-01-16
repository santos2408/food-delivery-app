<template>
  <div class="px-4 lg:px-10 2xl:px-0">
    <ul class="grid grid-cols-3 justify-between gap-3 sm:grid-cols-3 md:grid-cols-6 lg:gap-8">
      <li
        v-for="filter in filters"
        :key="filter.id"
        :data-filter="filter.title.toLowerCase()"
        class="flex flex-1 cursor-pointer flex-col items-center justify-center rounded-3xl bg-brand-white outline outline-1 outline-slate-200 hover:bg-brand-primary-50 hover:outline-brand-primary-500"
        @click="selectFilter(filter.slug)"
      >
        <button class="mx-auto w-full p-4">
          <img :src="filter.url" :alt="filter.title" class="mx-auto mb-2" />
          <span
            class="block text-center text-sm font-semibold text-brand-neutral-600 lg:text-base"
          >
            {{ filter.title }}
          </span>
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapActions } from "pinia";
import { useUserStore, ADD_SELECTED_RESTAURANT_TYPE } from "@/stores/user";
import {
  useRestaurantsStore,
  FETCH_RESTAURANTS,
  CLEAR_RESTAURANTS,
} from "@/stores/restaurants";

import { pizza, burger, meat, sushi, broccoli, cake } from "@/utils/foodFiltersImages.js";

export default {
  name: "TheFilter",
  data() {
    return {
      filters: [
        { id: 1, title: "Pizza", url: pizza, slug: "pizza" },
        { id: 2, title: "Lanches", url: burger, slug: "lanches" },
        { id: 3, title: "Churrasco", url: meat, slug: "churrasco" },
        { id: 4, title: "Japonesa", url: sushi, slug: "japonesa" },
        { id: 5, title: "Vegana", url: broccoli, slug: "vegana" },
        { id: 6, title: "Sobremesa", url: cake, slug: "sobremesa" },
      ],
    };
  },
  methods: {
    ...mapActions(useUserStore, [ADD_SELECTED_RESTAURANT_TYPE]),
    ...mapActions(useRestaurantsStore, [FETCH_RESTAURANTS, CLEAR_RESTAURANTS]),

    async selectFilter(slug) {
      this.ADD_SELECTED_RESTAURANT_TYPE(slug);

      this.$router.push({
        name: "Restaurants",
        query: {
          category: slug,
        },
      });
    },
  },
};
</script>

<style scoped>
.selected-filter {
  @apply bg-brand-primary-50;
  outline: red solid 2px;
}
</style>
