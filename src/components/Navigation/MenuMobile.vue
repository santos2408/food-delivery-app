<template>
  <div class="fixed left-0 top-0 z-50 w-full" @click="toggleMenu">
    <div
      class="absolute left-0 top-0 z-20 h-screen w-4/5 bg-brand-white p-4 shadow-lg xl:hidden"
    >
      <div class="flex items-center justify-between pb-6">
        <div class="flex items-center gap-14">
          <router-link to="/" class="py-4">
            <img
              src="@/assets/Icons/yumz/yumz-logo-1.png"
              class="w-24"
              alt="Yumz! Food Delivery Logo"
            />
          </router-link>
        </div>

        <button
          type="button"
          class="flex h-12 w-12 cursor-pointer items-center justify-center rounded-2xl bg-brand-neutral-50"
          @click.stop="toggleMenu"
        >
          <MenuClose color="#79858E" />
        </button>
      </div>

      <div>
        <div
          v-if="isLoggedIn"
          class="flex items-center gap-4 border-t-[1px] border-brand-neutral-50 pt-8"
        >
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

          <div class="group flex cursor-pointer items-center gap-1">
            <div
              class="box-border h-14 w-14 cursor-pointer overflow-hidden rounded-2xl border-2 border-brand-neutral-50 hover:border-brand-primary-500"
            >
              <img src="https://i.pravatar.cc/300" alt="" />
            </div>

            <ChevronDown
              size="18"
              class="text-brand-neutral-100 transition duration-150 group-hover:text-brand-primary-500"
            />
          </div>
        </div>

        <div v-else class="flex flex-col items-center gap-4">
          <router-link
            :to="{ name: 'Login' }"
            class="font-bold text-brand-neutral-600 hover:text-brand-primary-500"
            >Entrar
          </router-link>

          <button
            type="button"
            class="h-14 w-full rounded-full bg-brand-primary-500 px-16 text-sm font-bold text-white transition duration-150 hover:bg-brand-primary-400 active:bg-brand-primary-100 xl:px-8 xl:py-3"
            @click="login"
          >
            Cadastrar
          </button>
        </div>

        <ul
          class="flex flex-col gap-3 border-b-[1px] border-brand-neutral-50 pb-4 pt-6 text-2xl font-bold"
        >
          <li
            v-for="{ id, title, url } in profileItems"
            :key="id"
            class="cursor-pointer p-2 hover:text-brand-primary-500"
            :class="{ relative: id === menuItems.length }"
          >
            <router-link :to="url">{{ title }}</router-link>
          </li>
        </ul>
      </div>

      <ul
        class="flex flex-col gap-3 border-b-[1px] border-brand-neutral-50 py-4 text-2xl font-bold"
      >
        <li
          v-for="{ id, title, url } in menuItems"
          :key="id"
          class="cursor-pointer p-2 hover:text-brand-primary-500"
          :class="{ relative: id === menuItems.length }"
        >
          <router-link :to="url">{{ title }}</router-link>
        </li>
      </ul>
    </div>

    <div
      data-js="menu-outside"
      class="absolute left-0 top-0 z-10 h-screen w-full bg-black opacity-50"
    ></div>
  </div>
</template>

<script>
import { mapActions, mapState } from "pinia";
import { useMenuStore } from "@/stores/menu";
import { useUserStore } from "@/stores/user";

import { ShoppingBag, X } from "lucide-vue-next";

export default {
  name: "MenuMobile",
  components: {
    // Search,
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
        { id: 1, title: "Home", url: "/" },
        { id: 2, title: "Restaurantes", url: "/restaurants" },
        { id: 3, title: "Promoções", url: "/deals" },
      ],
      profileItems: [
        { id: 1, title: "Minha Conta", url: "# " },
        { id: 2, title: "Meus Pedidos", url: "/orders " },
      ],
    };
  },
  computed: {
    ...mapState(useUserStore, ["isLoggedIn"]),
  },
  methods: {
    ...mapActions(useMenuStore, ["toggleMenu"]),
    ...mapActions(useUserStore, ["login"]),
  },
};
</script>
