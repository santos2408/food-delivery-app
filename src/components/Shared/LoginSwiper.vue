<template>
  <div class="mx-auto w-[360px] px-4 lg:w-[500px]">
    <swiper-container class="h-36" init="false">
      <swiper-slide>
        <h2 class="mb-4 text-center text-2xl font-bold text-white lg:text-3xl">
          Leave reviews for all meals
        </h2>
        <p class="mx-auto text-center text-sm text-white">
          Your opinion matters here! Join our food review blog and help us uncover the
          secrets of the most appetizing dishes.
        </p>
      </swiper-slide>
      <swiper-slide>
        <h2 class="mb-4 text-center text-2xl font-bold text-white lg:text-3xl">
          Tasty Journeys
        </h2>
        <p class="mx-auto text-center text-sm text-white">
          Join us on this tasty journey, where we analyze every bite with care to provide
          the best gastronomic tips and reviews.
        </p>
      </swiper-slide>
      <swiper-slide>
        <h2 class="mb-4 text-center text-2xl font-bold text-white lg:text-3xl">
          Culinary Adventures
        </h2>
        <p class="mx-auto text-center text-sm text-white">
          Step into our culinary universe and share your experiences as we explore the
          best restaurants and their delights.
        </p>
      </swiper-slide>
      <swiper-slide>
        <h2 class="mb-4 text-center text-2xl font-bold text-white lg:text-3xl">
          Discover the Delights
        </h2>
        <p class="mx-auto text-center text-sm text-white">
          Explore the irresistible flavors of the culinary world with us and discover what
          dishes have to reveal in our food reviews.
        </p>
      </swiper-slide>
    </swiper-container>
  </div>
</template>

<script>
import swiperParams from "@/utils/loginSwiperParams";

export default {
  name: "LoginSwiper",
  mounted() {
    const swiperEl = document.querySelector("swiper-container");
    Object.assign(swiperEl, swiperParams);
    swiperEl.initialize();
  },
};
</script>
