<template>
  <footer class="w-full bg-brand-primary-500 py-11">
    <div class="flex 2xl:container 2xl:mx-auto">
      <div class="flex-1">
        <router-link :to="{ name: 'Home' }" class="mb-5 inline-block">
          <img
            src="@/assets/Icons/yumz/yumz-logo-2.png"
            class="w-24"
            alt="Yumz! Food Delivery Logo"
          />
        </router-link>
        <ul class="mb-11 flex gap-4">
          <li>
            <a href="https://www.facebook.com" target="_blank">
              <facebook-icon color="#FF6F8A" class="h-7 w-7 hover:brightness-200" />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com" target="_blank">
              <instagram-icon color="#FF6F8A" class="h-7 w-7 hover:brightness-200" />
            </a>
          </li>
          <li>
            <a href="https://www.youtube.com" target="_blank">
              <youtube-icon color="#FF6F8A" class="h-7 w-7 hover:brightness-200" />
            </a>
          </li>
          <li>
            <a href="https://www.twitter.com" target="_blank">
              <twitter-icon color="#FF6F8A" class="h-7 w-7 hover:brightness-200" />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com" target="_blank">
              <linkedin-icon color="#FF6F8A" class="h-7 w-7 hover:brightness-200" />
            </a>
          </li>
        </ul>
        <p class="text-sm text-brand-primary-100">
          2023 Yumz! Food Delivery. All Rights Reserveda.
          <router-link to="/" class="hover:text-white">Termos de Uso</router-link>
          <span class="text-xsm"> • </span>
          <router-link to="/" class="hover:text-white">Políticas de privacidade</router-link>
        </p>
      </div>

      <div class="flex gap-32">
        <div>
          <h4 class="mb-4 text-xl font-semibold text-brand-white">Responses</h4>
          <ul class="text-brand-300 flex flex-col gap-2 text-brand-primary-100">
            <li>
              <router-link to="/" class="hover:text-white">Como funciona</router-link>
            </li>
            <li>
              <router-link to="/" class="hover:text-white">Garantias</router-link>
            </li>
            <li>
              <router-link to="/" class="hover:text-white">Segurança</router-link>
            </li>
            <li>
              <router-link to="/" class="hover:text-white">Preços</router-link>
            </li>
          </ul>
        </div>

        <div>
          <h4 class="mb-4 text-xl font-semibold text-brand-white">Empresa</h4>
          <ul class="text-brand-300 flex flex-col gap-2 text-brand-primary-100">
            <li>
              <router-link to="/" class="hover:text-white">Sobre nós</router-link>
            </li>
            <li>
              <router-link to="/" class="hover:text-white">Preços</router-link>
            </li>
            <li>
              <router-link to="/" class="hover:text-white">Blog</router-link>
            </li>
            <li>
              <router-link to="/" class="hover:text-white">Licença</router-link>
            </li>
          </ul>
        </div>

        <div>
          <h4 class="mb-4 text-xl font-semibold text-brand-white">Suporte</h4>
          <ul class="text-brand-300 flex flex-col gap-2 text-brand-primary-100">
            <li>
              <router-link to="/" class="hover:text-white">Como começar</router-link>
            </li>
            <li>
              <router-link to="/" class="hover:text-white">Ajuda</router-link>
            </li>
            <li>
              <router-link to="/" class="hover:text-white">Reportar problema</router-link>
            </li>
            <li>
              <router-link to="/" class="hover:text-white">Entre em contato</router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import FacebookIcon from "@/assets/Icons/social/FacebookIcon.vue";
import InstagramIcon from "@/assets/Icons/social/InstagramIcon.vue";
import TwitterIcon from "@/assets/Icons/social/TwitterIcon.vue";
import YoutubeIcon from "@/assets/Icons/social/YoutubeIcon.vue";
import LinkedinIcon from "@/assets/Icons/social/LinkedinIcon.vue";

export default {
  name: "TheFooter",
  components: {
    FacebookIcon,
    InstagramIcon,
    TwitterIcon,
    YoutubeIcon,
    LinkedinIcon,
  },
  data() {
    return {};
  },
};
</script>
