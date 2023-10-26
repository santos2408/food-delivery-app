import { createRouter, createWebHashHistory } from "vue-router";

import HomeView from "@/views/HomeView.vue";
import LoginView from "@/views/Authentication/LoginView.vue";
import RequestPasswordView from "@/views/Authentication/RequestPasswordView.vue";
import SignupView from "@/views/Authentication/SignupView.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeView,
  },
  {
    path: "/login",
    name: "Login",
    component: LoginView,
  },
  {
    path: "/request-password",
    name: "RequestPassword",
    component: RequestPasswordView,
  },
  {
    path: "/signup",
    name: "Signup",
    component: SignupView,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
