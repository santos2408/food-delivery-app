<template>
  <nav
    class="relative flex items-center justify-between border-b-[1px] border-brand-neutral-50 px-4 py-4 lg:px-10 2xl:px-0"
  >
    <div class="flex items-center gap-14">
      <router-link to="/" class="py-4">
        <img
          src="@/assets/Icons/yumz/yumz-logo-1.png"
          class="w-24"
          alt="Yumz! Food Delivery Logo"
        />
      </router-link>
      <label
        for="input-search"
        class="hidden w-80 items-center rounded-xl bg-[#f7f7f7] px-4 xl:flex"
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

    <Transition name="slide-menu">
      <menu-mobile v-show="menuActive" :status="menuActive" />
    </Transition>

    <div class="flex gap-6">
      <ul class="hidden items-center gap-6 font-bold text-brand-neutral-600 xl:flex">
        <li
          v-for="(menuItem, index) in menuItems"
          :key="menuItem.title"
          :class="[
            'cursor-pointer',
            'p-2',
            'hover:text-brand-primary-500',
            { relative: index === lastMenuItem },
          ]"
        >
          <span
            v-if="index === lastMenuItem"
            class="pointer-events-none absolute -left-3 top-2/4 h-8 w-[1px] -translate-y-1/2 cursor-default bg-brand-neutral-50"
          >
          </span>
          <router-link :to="menuItem.url" class="text-base">{{ menuItem.title }}</router-link>
        </li>
      </ul>

      <div class="flex items-center">
        <div class="relative">
          <span
            class="absolute -top-2 right-0 flex h-5 min-w-[20px] items-center justify-center rounded-lg bg-brand-primary-500 px-1 text-[10px] font-semibold leading-none text-white"
          >
            2
          </span>
          <span
            class="flex h-12 w-12 cursor-pointer items-center justify-center rounded-2xl border-2 border-brand-neutral-50 bg-brand-primary-50 hover:border-brand-primary-500"
          >
            <ShoppingBag size="20" color="#FF2851" />
          </span>
        </div>
        <div
          class="ml-4 box-border h-12 w-12 cursor-pointer overflow-hidden rounded-2xl border-2 border-brand-neutral-50 hover:border-brand-primary-500"
        >
          <img src="https://i.pravatar.cc/300" alt="" />
        </div>

        <span class="mx-4 h-8 w-[1px] bg-brand-neutral-50 xl:hidden"> </span>

        <button
          type="button"
          class="flex h-12 w-12 cursor-pointer items-center justify-center rounded-2xl bg-brand-neutral-50 xl:hidden"
          @click="toggleMenu"
        >
          <MenuToggle color="#79858E" />
        </button>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapStores } from "pinia";
import { useMenuStore } from "@/stores/menu";

import { Search, ShoppingBag, Menu } from "lucide-vue-next";

import MenuMobile from "@/components/Shared/Navigation/MenuMobile.vue";

export default {
  name: "TheNavigation",
  components: {
    Search,
    ShoppingBag,
    MenuToggle: Menu,
    MenuMobile,
  },
  data() {
    return {
      menuItems: [
        { title: "Restaurantes", url: "/restaurantes" },
        { title: "Promoções", url: "/promocoes" },
        { title: "Meus Pedidos", url: "/pedidos" },
      ],
    };
  },
  computed: {
    ...mapStores(useMenuStore),
    menuActive() {
      return this.menuStore.menuActive;
    },
    lastMenuItem() {
      return this.menuItems.length - 1;
    },
  },
  methods: {
    toggleMenu(event) {
      this.menuStore.toggleMenu(event);
    },
  },
};
</script>

<style scoped>
.slide-menu-enter-active {
  transition: all 0.3s ease-out;
}

.slide-menu-leave-active {
  transition: all 0.3s ease-out;
}

.slide-menu-enter-from,
.slide-menu-leave-to {
  transform: translateY(-100%);
}
</style>
