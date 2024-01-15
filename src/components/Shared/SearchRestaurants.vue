<template>
  <div class="mb-12 flex flex-col items-center justify-center">
    <label
      for="input-search"
      class="flex w-full items-center gap-3 rounded-full border-2 bg-white pl-4 shadow-md xl:w-[800px] xl:py-1"
    >
      <div>
        <Search color="#FF2851" size="22" />
      </div>

      <input
        id="input-search"
        class="w-full rounded-xl bg-transparent py-3 text-sm text-brand-neutral-500 outline-none placeholder:text-brand-neutral-200"
        type="text"
        placeholder="Busque por item ou loja"
      />

      <button
        type="button"
        class="mr-1 rounded-full bg-brand-primary-500 px-6 py-[10px] text-sm font-bold text-white transition duration-150 hover:bg-brand-primary-400 active:bg-brand-primary-100 xl:px-8 xl:py-3"
      >
        Buscar
      </button>
    </label>
  </div>
</template>

<script>
import { Search } from "lucide-vue-next";

export default {
  name: "SearchRestaurants",
  components: {
    Search,
  },
};
</script>
