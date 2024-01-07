<template>
  <div class="absolute left-0 top-0 z-10 w-full bg-brand-white p-4 shadow-lg xl:hidden">
    <div class="flex items-center justify-between">
      <a href="/" class="py-4">
        <img
          src="@/assets/Icons/yumz/yumz-logo-1.png"
          class="w-24"
          alt="Yumz! Food Delivery Logo"
        />
      </a>
      <button
        type="button"
        class="flex h-12 w-12 cursor-pointer items-center justify-center rounded-2xl bg-brand-neutral-50"
        @click="toggleMenu"
      >
        <MenuClose color="#79858E" />
      </button>
    </div>

    <ul
      class="flex flex-col items-center gap-3 border-b-[1px] border-brand-neutral-50 py-10 text-3xl font-bold"
      @click="toggleMenu"
    >
      <li
        v-for="{ id, title, url } in menuItems"
        :key="id"
        class="cursor-pointer p-2 hover:text-brand-primary-500"
        :class="{ relative: id === menuItems.length }"
      >
        <router-link :to="url">{{ title }}</router-link>
      </li>
      <div
        data-js="menu-outside"
        class="absolute -bottom-[90%] left-0 h-[90%] w-full opacity-0"
      ></div>
    </ul>

    <div class="flex items-center gap-4 pt-5">
      <label for="input-search" class="flex flex-1 items-center rounded-xl bg-[#f7f7f7] px-4">
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

      <div class="relative">
        <span
          class="absolute -top-2 right-0 flex h-5 w-5 items-center justify-center rounded-lg bg-brand-primary-500 text-[10px] font-semibold text-white"
        >
          2
        </span>
        <span
          class="flex h-14 w-14 cursor-pointer items-center justify-center rounded-2xl border-2 border-brand-neutral-50 bg-brand-white hover:border-brand-primary-500"
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
</template>

<script>
import { mapActions } from "pinia";
import { useMenuStore } from "@/stores/menu";

import { Search, ShoppingBag, X } from "lucide-vue-next";

export default {
  name: "MenuMobile",
  components: {
    Search,
    ShoppingBag,
    MenuClose: X,
  },
  props: {
    status: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      menuItems: [
        { id: 1, title: "Restaurantes", url: "/restaurants" },
        { id: 2, title: "Promoções", url: "/deals" },
        { id: 3, title: "Meus Pedidos", url: "/orders" },
      ],
    };
  },
  methods: {
    ...mapActions(useMenuStore, ["toggleMenu"]),
  },
};
</script>

<style scoped></style>
