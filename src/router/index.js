import { createRouter, createWebHashHistory } from "vue-router";

import Home from "@/views/HomeView.vue";
import LoginView from "@/views/LoginView.vue";
import RequestPasswordView from "@/views/RequestPasswordView.vue";
import SignupView from "@/views/SignupView.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
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
