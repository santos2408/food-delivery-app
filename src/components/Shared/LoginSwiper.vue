<template>
  <div class="mx-auto w-[360px] px-4 lg:w-[500px]">
    <swiper-container class="h-36" init="false">
      <swiper-slide>
        <h2 class="mb-4 text-center text-2xl font-bold text-white lg:text-3xl">
          Deixe comentários nas refeições
        </h2>
        <p class="mx-auto text-center text-sm text-white">
          Sua opinião é importante aqui! Participe de nosso blog de avaliação de alimentos
          e nos ajude a descobrir os segredos dos pratos mais deliciosos.
        </p>
      </swiper-slide>
      <swiper-slide>
        <h2 class="mb-4 text-center text-2xl font-bold text-white lg:text-3xl">
          Viagens Saborosas
        </h2>
        <p class="mx-auto text-center text-sm text-white">
          Junte-se a nós nessa jornada saborosa, onde analisamos cada mordida com cuidado
          para fornecer as melhores dicas e avaliações gastronômicas.
        </p>
      </swiper-slide>
      <swiper-slide>
        <h2 class="mb-4 text-center text-2xl font-bold text-white lg:text-3xl">
          Aventuras Culinárias
        </h2>
        <p class="mx-auto text-center text-sm text-white">
          Entre em nosso universo culinário e compartilhe suas experiências enquanto
          exploramos os melhores restaurantes e suas delícias.
        </p>
      </swiper-slide>
      <swiper-slide>
        <h2 class="mb-4 text-center text-2xl font-bold text-white lg:text-3xl">
          Descubra as Delícias
        </h2>
        <p class="mx-auto text-center text-sm text-white">
          Explore os sabores irresistíveis do mundo da culinária conosco e descubra o que
          os pratos pratos têm a revelar em nossas avaliações de alimentos.
        </p>
      </swiper-slide>
    </swiper-container>
  </div>
</template>

<script>
import { mapStores } from "pinia";

import { useSwiperStore } from "../../stores/swiper";

import { loginSwiperParams } from "@/utils/swiperParams";

export default {
  name: "LoginSwiper",
  data() {
    return {
      swiperElement: null,
    };
  },
  computed: {
    ...mapStores(useSwiperStore),
  },
  mounted() {
    this.swiperElement = document.querySelector("swiper-container");
    Object.assign(this.swiperElement, {
      ...loginSwiperParams,
      initialSlide: this.swiperStore.slideIndex || 0,
    });
    this.swiperElement.initialize();
  },
  beforeUnmount() {
    this.swiperStore.updateIndex(this.swiperElement.swiper.realIndex);
  },
};
</script>
