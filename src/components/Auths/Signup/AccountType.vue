<template>
  <div class="mb-10 flex flex-col gap-3">
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
          <h2 class="text-base font-bold text-brand-dark-1">Restaurant</h2>
          <p class="text-sm text-brand-gray-2">Manage your own restaurant</p>
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
          <h2 class="text-base font-bold text-brand-dark-1">Personal</h2>
          <p class="text-sm text-brand-gray-2">Keep your orders in one place</p>
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
      return this.selectedType === "restaurant" ? "#fff" : "#83859C";
    },
    iconPersonalColor() {
      return this.selectedType === "personal" ? "#fff" : "#83859C";
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
  @apply w-full rounded-2xl border-[2px] border-[#E7E8EC] p-4;
}
.icon {
  @apply flex h-10 w-10 items-center justify-center rounded-xl bg-brand-gray-4;
}
.selected-button {
  @apply border-brand-purple-2 bg-[#F3F4FF];
}
.selected-button_icon-container {
  @apply bg-brand-purple-2;
}
</style>
