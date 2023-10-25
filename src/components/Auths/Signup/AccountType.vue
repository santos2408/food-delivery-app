<template>
  <div class="mb-10 flex flex-col gap-3 md:flex-row md:gap-4 xl:flex-col">
    <button
      :class="{ 'selected-button': selectedType === 'restaurant' }"
      data-type="restaurant"
      @click="selectOption"
    >
      <div class="flex flex-nowrap items-center gap-4">
        <div
          :class="[
            'icon',
            { 'selected-button_icon-container': selectedType === 'restaurant' },
          ]"
        >
          <ShoppingBag :color="iconRestaurantColor" />
        </div>
        <div class="text-left">
          <h2 class="text-base font-bold text-brand-neutral-800">Restaurante</h2>
          <p class="text-sm text-brand-neutral-300">Gerencie seu próprio restaurante</p>
        </div>
      </div>
    </button>

    <button
      :class="{ 'selected-button': selectedType === 'personal' }"
      data-type="personal"
      @click="selectOption"
    >
      <div class="flex flex-nowrap items-center gap-4">
        <div
          :class="[
            'icon',
            { 'selected-button_icon-container': selectedType === 'personal' },
          ]"
        >
          <User :color="iconPersonalColor" />
        </div>
        <div class="text-left">
          <h2 class="text-base font-bold text-brand-neutral-800">Pessoal</h2>
          <p class="text-sm text-brand-neutral-300">
            Mantenha seus pedidos em um só lugar
          </p>
        </div>
      </div>
    </button>
  </div>
</template>

<script>
import { ShoppingBag, User } from "lucide-vue-next";

export default {
  name: "AccountTypeButton",
  components: {
    ShoppingBag,
    User,
  },
  data() {
    return {
      selectedType: "restaurant",
    };
  },
  computed: {
    iconRestaurantColor() {
      return this.selectedType === "restaurant" ? "#fff" : "#A3ABB2";
    },
    iconPersonalColor() {
      return this.selectedType === "personal" ? "#fff" : "#A3ABB2";
    },
  },
  methods: {
    selectOption($event) {
      this.selectedType = $event.currentTarget.dataset.type;
    },
  },
};
</script>

<style scoped>
button {
  @apply w-full rounded-2xl border-[2px] border-neutral-200 p-4;
}
.icon {
  @apply flex h-10 w-10 items-center justify-center rounded-xl bg-brand-neutral-50;
}
.selected-button {
  @apply border-brand-primary-500 bg-brand-neutral-50;
}
.selected-button_icon-container {
  @apply bg-brand-primary-500;
}
</style>
