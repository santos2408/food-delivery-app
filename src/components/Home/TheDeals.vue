<template>
  <section class="mb-12">
    <header-section :has-button="true">
      <template #title>Ofertas</template>
      <template #button>Todas as Ofertas</template>
    </header-section>

    <the-deals-content-loader v-show="loading" />

    <div
      v-show="!loading"
      class="custom-swiper-content relative md:px-4 lg:px-10 2xl:px-0"
      :class="classDeals"
    >
      <swiper-container init="false" events-prefix="swiper-">
        <swiper-slide
          v-for="deal in deals"
          :key="deal.id"
          class="custom-swiper-slide overflow-hidden rounded-xl"
        >
          <div class="transition duration-300 hover:-rotate-1 hover:scale-105">
            <a href="#">
              <span>
                <img :src="getDealUrl(deal.image)" :alt="deal.description" />
              </span>
            </a>
          </div>
        </swiper-slide>
      </swiper-container>

      <div class="custom-button-prev hidden lg:left-12 lg:block 2xl:left-4">
        <img src="/images/chevron-left.svg" class="w-6 lg:h-6" />
      </div>
      <div class="custom-button-next hidden lg:right-12 lg:block 2xl:right-4">
        <img src="/images/chevron-right.svg" class="w-6 lg:h-6" />
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import { dealsSwiperParams } from "@/utils/swiperParams";

import HeaderSection from "@/components/Shared/HeaderSection.vue";
import TheDealsContentLoader from "@/assets/Loaders/ContentLoaders/TheDealsContentLoader.vue";
import getDeals from "@/api/getDeals";

const swiperElement = ref(null);
const deals = ref([]);
const loading = ref(true);

const classDeals = computed(() => {
  return {
    "opacity-0": loading.value,
    "opacity-1": !loading.value,
  };
});

onMounted(async () => {
  const response = await getDeals();

  deals.value = response.data;
  swiperElement.value = document.querySelector("swiper-container");

  Object.assign(swiperElement.value, dealsSwiperParams);
  swiperElement.value.initialize();
  loading.value = false;
});

const getDealUrl = (deal) => {
  return new URL(`../../assets/images/deals/${deal}`, import.meta.url).href;
};
</script>

<style scoped>
.custom-button-next,
.custom-button-prev {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: #000;
  opacity: 0;
  border-radius: 100%;
  padding: 10px;
  transition: all 0.2s;
  z-index: 100;
}

.custom-swiper-content:hover .custom-button-prev,
.custom-swiper-content:hover .custom-button-next {
  opacity: 0.6;
  /* background-color: black; */
}

.custom-swiper-content:hover .custom-button-next:hover,
.custom-swiper-content:hover .custom-button-prev:hover {
  background-color: #000;
  opacity: 0.8;
}
</style>
