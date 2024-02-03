<template>
  <li
    class="flex-1 rounded-xl border bg-brand-white shadow-sm transition duration-150 hover:shadow-md xl:flex"
  >
    <router-link
      :to="{ name: 'Restaurant', params: { restaurant: value.slug, id: value.id } }"
      class="flex w-full items-center gap-3 px-3 py-4"
    >
      <div class="h-20 w-20 overflow-hidden rounded-xl">
        <img :src="getLogoUrl" :alt="value.name" />
      </div>

      <div ref="description" class="flex flex-1 flex-col gap-1">
        <h3
          class="w-52 truncate text-base font-bold text-brand-neutral-800 sm:w-[460px] md:w-56"
        >
          {{ value.name }}
        </h3>

        <div class="flex items-center text-sm">
          <TheStar class="mb-1 h-4 w-4" />
          <span class="ml-1 font-semibold text-[#FFC700]">{{ value.rate }}</span>
          <span class="mx-2 text-[10px] text-brand-neutral-300"> • </span>
          <span class="font-semibold capitalize text-brand-neutral-300">
            {{ value.category }}
          </span>
        </div>

        <div class="flex items-center gap-[8px] text-sm font-semibold text-brand-neutral-300">
          <span class="flex items-center gap-1">
            <Clock :size="13" color="#A3ABB2" />
            {{ formattedDeliveryTime }}
          </span>

          <span class="text-[10px]"> • </span>

          <span :style="shippingValueStyle">
            {{ shippingValue }}
          </span>
        </div>
      </div>
    </router-link>
  </li>
</template>

<script>
import { Clock } from "lucide-vue-next";
import TheStar from "@/assets/Icons/TheStar.vue";

export default {
  name: "RestaurantListing",
  components: {
    Clock,
    TheStar,
  },
  props: {
    value: {
      type: Object,
      required: true,
    },
  },
  computed: {
    getShippingValueType() {
      const shippingValue = this.value.shipping;
      return typeof shippingValue;
    },
    shippingValue() {
      const shippingValueType = this.getShippingValueType;
      return shippingValueType === "number"
        ? `R$ ${this.value.shipping}`
        : this.value.shipping;
    },
    shippingValueStyle() {
      const shippingValueType = this.getShippingValueType;
      return shippingValueType === "number" ? "" : { color: "#17AA64" };
    },
    formattedDeliveryTime() {
      return `${this.value.delivery_time_min}-${this.value.delivery_time_max} min`;
    },
    getLogoUrl() {
      return new URL(`../../assets/images/logos/${this.value.logo}`, import.meta.url).href;
    },
  },
};
</script>
