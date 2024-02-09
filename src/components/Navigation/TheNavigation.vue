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
    </div>

    <Transition name="slide-menu">
      <menu-mobile v-show="isMenuActive" :status="isMenuActive" />
    </Transition>

    <ul class="hidden items-center gap-6 font-bold text-brand-neutral-600 xl:flex">
      <li
        v-for="(menuItem, index) in menuItems"
        :key="menuItem.id"
        :class="[
          'cursor-pointer',
          'hover:text-brand-primary-500',
          { relative: index === lastMenuItem },
        ]"
      >
        <router-link :to="menuItem.url" class="p-2 text-base">
          {{ menuItem.title }}
        </router-link>
      </li>
    </ul>

    <div class="flex items-center">
      <div class="relative hidden xl:block">
        <span
          class="absolute -top-2 right-0 flex h-5 min-w-[20px] items-center justify-center rounded-lg bg-brand-primary-500 px-1 text-[10px] font-semibold leading-none text-white"
        >
          2
        </span>
        <span
          class="flex h-12 w-12 cursor-pointer items-center justify-center rounded-2xl border-2 border-brand-neutral-50 bg-brand-white hover:border-brand-primary-500 md:bg-brand-primary-50"
        >
          <ShoppingBag size="20" color="#FF2851" />
        </span>
      </div>

      <div v-if="isLoggedIn" class="group hidden cursor-pointer items-center gap-1 xl:flex">
        <div
          class="ml-4 box-border h-12 w-12 overflow-hidden rounded-2xl border-2 border-brand-neutral-50 transition duration-150 group-hover:border-brand-primary-500"
        >
          <img src="https://i.pravatar.cc/300" alt="" />
        </div>

        <ChevronDown
          size="18"
          class="text-brand-neutral-100 transition duration-150 group-hover:text-brand-primary-500"
        />
      </div>

      <button
        v-else
        type="button"
        class="ml-4 rounded-full bg-brand-primary-500 px-6 py-[10px] text-sm font-bold text-white transition duration-150 hover:bg-brand-primary-400 active:bg-brand-primary-100 xl:px-8 xl:py-3"
        @click="login"
      >
        Entrar
      </button>

      <span class="mx-4 hidden h-8 w-[1px] bg-brand-neutral-50 xl:hidden"></span>

      <button
        type="button"
        class="flex h-12 w-12 cursor-pointer items-center justify-center rounded-2xl bg-brand-neutral-50 xl:hidden"
        @click="toggleMenu"
      >
        <MenuToggle color="#79858E" />
      </button>
    </div>
  </nav>
</template>

<script>
import { mapState, mapActions } from "pinia";
import { useMenuStore } from "@/stores/menu";
import { useUserStore } from "@/stores/user";

import { ShoppingBag, Menu, ChevronDown } from "lucide-vue-next";

import MenuMobile from "@/components/Navigation/MenuMobile.vue";

export default {
  name: "TheNavigation",
  components: {
    ShoppingBag,
    MenuToggle: Menu,
    ChevronDown,
    MenuMobile,
  },
  data() {
    return {
      menuItems: [
        { id: 1, title: "Home", url: "/" },
        { id: 2, title: "Restaurantes", url: "/restaurants" },
        { id: 3, title: "Promoções", url: "/deals" },
      ],
    };
  },
  computed: {
    ...mapState(useMenuStore, ["menuActive"]),
    ...mapState(useUserStore, ["isLoggedIn"]),
    isMenuActive() {
      return this.menuActive;
    },
    lastMenuItem() {
      return this.menuItems.length - 1;
    },
  },
  methods: {
    ...mapActions(useMenuStore, ["toggleMenu"]),
    ...mapActions(useUserStore, ["login"]),
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
  transform: translateX(-100%);
}
</style>
