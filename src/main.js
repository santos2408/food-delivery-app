import { createApp } from "vue";
import router from "@/router/index";
import { register } from "swiper/element/bundle";

import "@/index.css";
import App from "./App.vue";

createApp(App).use(register).use(router).mount("#app");
