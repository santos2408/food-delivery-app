import { createApp } from "vue";
import { createPinia } from "pinia";
import router from "@/router/index";
import { register } from "swiper/element/bundle";

import "@/index.css";
import App from "./App.vue";

const pinia = createPinia();

createApp(App).use(pinia).use(register).use(router).mount("#app");
