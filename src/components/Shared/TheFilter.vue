<template>
  <div class="px-4 lg:px-10 2xl:px-0">
    <ul class="grid grid-cols-3 justify-between gap-3 sm:grid-cols-3 md:grid-cols-6 lg:gap-8">
      <li
        v-for="filter in filters"
        :key="filter.id"
        :data-filter="filter.title.toLowerCase()"
        class="flex flex-1 cursor-pointer flex-col items-center justify-center rounded-3xl p-4 outline outline-1 outline-slate-200 hover:bg-brand-primary-50 hover:outline-brand-primary-500"
        @click="selectFilter"
      >
        <img :src="filter.url" :alt="filter.title" class="mb-2" />
        <p class="text-sm font-semibold text-brand-neutral-600 lg:text-base">
          {{ filter.title }}
        </p>
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
  components: {},
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
      selectedFilters: [],
    };
  },
  methods: {
    selectFilter(event) {
      const clickedFilter = event.target.closest("[data-filter]");
      const clickedFilterDataset = clickedFilter.dataset.filter;
      const selectedFilterIndex = this.selectedFilters.findIndex(
        (selectedFilter) => selectedFilter === clickedFilterDataset,
      );

      if (selectedFilterIndex >= 0) {
        let updatedSelectedFilters = [...this.selectedFilters];
        updatedSelectedFilters.splice(selectedFilterIndex, 1);
        this.selectedFilters = updatedSelectedFilters;
        clickedFilter.classList.remove("selected-filter");
        return;
      }

      clickedFilter.classList.add("selected-filter");
      this.selectedFilters.push(clickedFilterDataset);
    },
  },
};
</script>

<style scoped>
.selected-filter {
  outline: red solid 2px;
}
</style>
