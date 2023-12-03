<template>
  <div class="mb-12 px-4 lg:px-10 2xl:px-0">
    <div class="mb-5 flex items-center justify-between">
      <h2 class="text-3xl font-bold text-brand-neutral-500">Destaques</h2>
    </div>

    <ul class="grid grid-cols-3 justify-between gap-3 sm:grid-cols-3 md:grid-cols-6 lg:gap-8">
      <li
        v-for="filter in filters"
        :key="filter.id"
        :data-filter="filter.title.toLowerCase()"
        class="flex flex-1 cursor-pointer flex-col items-center justify-center rounded-3xl bg-brand-white outline outline-1 outline-slate-200 hover:bg-brand-primary-50 hover:outline-brand-primary-500"
        @click="selectFilter"
      >
        <router-link to="/restaurantes" class="mx-auto w-full p-4">
          <img :src="filter.url" :alt="filter.title" class="mx-auto mb-2" />
          <p class="text-center text-sm font-semibold text-brand-neutral-600 lg:text-base">
            {{ filter.title }}
          </p>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import pizza from "@/assets/Icons/filters/pizza.png";
import burger from "@/assets/Icons/filters/burger.png";
import meat from "@/assets/Icons/filters/meat.png";
import sushi from "@/assets/Icons/filters/sushi.png";
import broccoli from "@/assets/Icons/filters/broccoli.png";
import cake from "@/assets/Icons/filters/cake.png";

export default {
  name: "TheFilter",
  data() {
    return {
      filters: [
        { id: 1, title: "Pizza", url: pizza },
        { id: 2, title: "Hambúrguer", url: burger },
        { id: 3, title: "Churrasco", url: meat },
        { id: 4, title: "Sushi", url: sushi },
        { id: 5, title: "Vegano", url: broccoli },
        { id: 6, title: "Sobremesa", url: cake },
      ],
    };
  },
  methods: {
    selectFilter() {
      //
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
