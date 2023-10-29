<template>
  <section class="mb-8">
    <div class="mb-5 flex items-center justify-between px-4 lg:px-10 2xl:px-0">
      <h2 class="text-3xl font-bold text-brand-neutral-800">Ofertas</h2>
      <a
        href="#"
        class="rounded-full border-[1px] border-brand-primary-500 px-5 py-3 text-xsm font-bold uppercase text-brand-primary-500 transition duration-150 hover:bg-brand-primary-500 hover:text-white"
      >
        Todas as ofertas
      </a>
    </div>

    <div class="custom-swiper-content relative md:px-4 lg:px-10 2xl:px-0">
      <swiper-container init="false">
        <swiper-slide
          v-for="deal in deals"
          :key="deal.id"
          class="custom-swiper-slide overflow-hidden rounded-xl"
        >
          <div class="transition duration-300 hover:-rotate-1 hover:scale-105">
            <a href="#">
              <span>
                <img :src="deal.url" :alt="deal.alt" />
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

<script>
import { dealsSwiperParams } from "@/utils/swiperParams";

import deal1 from "@/assets/images/deals/oferta-1.avif";
import deal2 from "@/assets/images/deals/oferta-2.avif";
import deal3 from "@/assets/images/deals/oferta-3.avif";
import deal4 from "@/assets/images/deals/oferta-4.avif";
import deal5 from "@/assets/images/deals/oferta-5.avif";
import deal6 from "@/assets/images/deals/oferta-6.avif";
import deal7 from "@/assets/images/deals/oferta-7.avif";
import deal8 from "@/assets/images/deals/oferta-8.avif";

export default {
  name: "TheDeals",
  components: {},
  data() {
    return {
      swiperElement: null,
      deals: [
        { id: 1, url: deal1, alt: "McDonald's com 40% OFF" },
        { id: 2, url: deal2, alt: "Pra aproveitar o desconto" },
        { id: 3, url: deal3, alt: "Pra aproveitar o desconto" },
        { id: 4, url: deal4, alt: "Entrega grátis" },
        { id: 5, url: deal5, alt: "Quem quer cupom?" },
        { id: 6, url: deal6, alt: "Doces ou travessuras na Yumz!" },
        { id: 7, url: deal7, alt: "Pizzas com promo" },
        { id: 8, url: deal8, alt: "Até 50% OFF" },
      ],
    };
  },
  mounted() {
    this.swiperElement = document.querySelector("swiper-container");
    Object.assign(this.swiperElement, dealsSwiperParams);
    this.swiperElement.initialize();
  },
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
