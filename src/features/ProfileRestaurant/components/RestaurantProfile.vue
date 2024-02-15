<template>
  <header class="2xl:container lg:mb-16 2xl:mx-auto">
    <the-navigation />
  </header>

  <main class="min-h-screen 2xl:container lg:px-10 2xl:mx-auto 2xl:px-0">
    <div class="relative w-full overflow-hidden lg:rounded-xl">
      <img src="../../../assets/images/profile.png" alt="" class="h-full w-full" />
    </div>

    <div>
      <div class="h-20 w-20 overflow-hidden rounded-xl">
        <img :src="getLogoUrl" alt="" />
      </div>

      <div>
        <h1>Safari Burger & Grill Leblon</h1>

        <p>
          O Safari Burger & Grill oferece uma experiência gastronômica emocionante, combinando
          o melhor de hambúrgueres gourmet e pratos grelhados em um ambiente único e
          descontraído.
        </p>

        <div>
          <span>30-40 min</span>
          <span>R$ 9.00</span>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import TheNavigation from "@/components/navigation/TheNavigation.vue";

export default {
  name: "RestaurantProfile",
  components: {
    TheNavigation,
  },
  computed: {
    restaurantCover() {
      return {
        "background-image":
          'url("https://cms-images.cominar.com/convert?extend=white&key=mDCrU%2BvMgyHVg61WaVrX5C2BQk7xaSZvP3brZ8xJtrFBxxzYK%2F0HwHw%2Bq0oIGg2K&nocrop=true&quality=90&stripmeta=true&type=jpeg&url=https%3A%2F%2Fcms-assets.cominar.com%2Fcominar-website-api-assets%2Fcms%2FvmbizJOVJ03u5_XANYlpoA.jpg")',
      };
    },
    getLogoUrl() {
      return new URL(`../../../assets/images/logos/safari-burger-grill-logo`, import.meta.url)
        .href;
    },
  },
};
</script>

<style scoped>
.restaurant-cover {
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
