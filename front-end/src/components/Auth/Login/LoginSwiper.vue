<template>
  <div class="mx-auto w-[360px] px-4 lg:w-[500px]">
    <swiper-container class="h-36" init="false">
      <swiper-slide v-for="slide in slides" :key="slide.title">
        <h2 class="mb-4 text-center text-2xl font-bold text-white lg:text-3xl">
          {{ slide.title }}
        </h2>
        <p class="mx-auto text-center text-sm text-white">
          {{ slide.description }}
        </p>
      </swiper-slide>
    </swiper-container>
  </div>
</template>

<script>
import { mapState, mapActions } from "pinia";

import { useSwiperStore } from "@/stores/swiper";

import { loginSwiperParams } from "@/utils/swiperParams";

export default {
  name: "LoginSwiper",
  data() {
    return {
      swiperElement: {},
      slides: [
        {
          title: "Deixe comentários nas refeições",
          description:
            "Sua opinião é importante aqui! Participe de nosso blog de avaliação de alimentos e nos ajude a descobrir os segredos dos pratos mais deliciosos.",
        },
        {
          title: "Viagens Saborosas",
          description:
            "Junte-se a nós nessa jornada saborosa, onde analisamos cada mordida com cuidado para fornecer as melhores dicas e avaliações gastronômicas.",
        },
        {
          title: "Aventuras Culinárias",
          description:
            "Entre em nosso universo culinário e compartilhe suas experiências enquanto exploramos os melhores restaurantes e suas delícias.",
        },
        {
          title: "Descubra as Delícias",
          description:
            "Explore os sabores irresistíveis do mundo da culinária conosco e descubra o que os pratos pratos têm a revelar em nossas avaliações de alimentos.",
        },
      ],
    };
  },
  computed: {
    ...mapState(useSwiperStore, ["slideIndex"]),
  },
  mounted() {
    this.swiperElement = document.querySelector("swiper-container");
    Object.assign(this.swiperElement, {
      ...loginSwiperParams,
      initialSlide: this.slideIndex || 0,
    });
    this.swiperElement.initialize();
  },
  beforeUnmount() {
    this.updateIndex(this.swiperElement.swiper.realIndex);
  },
  methods: {
    ...mapActions(useSwiperStore, ["updateIndex"]),
  },
};
</script>
