<template>
  <nav
    class="flex items-center justify-between border-b-[1px] border-brand-neutral-50 py-6"
  >
    <div class="flex items-center gap-14">
      <a href="/" class="py-4">
        <yumz-original-logo />
      </a>
      <label
        for="input-search"
        class="flex w-80 items-center rounded-xl bg-brand-neutral-50 px-4"
      >
        <input
          id="input-search"
          class="w-full rounded-xl bg-transparent py-3 text-base text-brand-neutral-500 outline-none placeholder:text-brand-neutral-200"
          type="text"
          placeholder="Busque por item ou loja"
        />
        <div>
          <Search class="cursor-pointer" color="#FF2851" size="22" />
        </div>
      </label>
    </div>

    <div class="flex gap-6">
      <ul class="flex items-center gap-8 font-bold text-brand-neutral-600">
        <li class="cursor-pointer p-2 hover:text-brand-primary-500">
          <a href="#">Restaurantes</a>
        </li>
        <li class="cursor-pointer p-2 hover:text-brand-primary-500">
          <a href="#">Promoções</a>
        </li>

        <span class="block h-8 w-[1px] bg-brand-neutral-50 text-brand-primary-500">
        </span>

        <li class="cursor-pointer p-2 hover:text-brand-primary-500">
          <a href="#">Meus Pedidos</a>
        </li>
      </ul>

      <div class="flex items-center gap-4">
        <div class="relative">
          <span
            class="absolute -top-2 right-0 flex h-5 w-5 items-center justify-center rounded-lg bg-brand-primary-500 text-[10px] font-semibold text-white"
          >
            2
          </span>
          <span
            class="flex h-14 w-14 cursor-pointer items-center justify-center rounded-2xl border-2 border-brand-neutral-50 bg-brand-primary-50 hover:border-brand-primary-500"
          >
            <ShoppingBag size="20" color="#FF2851" />
          </span>
        </div>
        <div
          class="box-border h-14 w-14 cursor-pointer overflow-hidden rounded-2xl border-2 border-brand-neutral-50 hover:border-brand-primary-500"
        >
          <img src="https://i.pravatar.cc/300" alt="" />
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { Search, ShoppingBag } from "lucide-vue-next";
import YumzOriginalLogo from "@/assets/icons/YumzOriginalLogo.vue";

export default {
  name: "TheNavigation",
  components: {
    Search,
    ShoppingBag,
    YumzOriginalLogo,
  },
  data() {
    return {};
  },
};
</script>

<style scoped></style>
