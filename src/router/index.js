import { createRouter, createWebHashHistory } from "vue-router";

import HomeView from "@/views/HomeView.vue";
import RestaurantsView from "@/views/RestaurantsView.vue";
import LoginView from "@/views/Auth/LoginView.vue";
import RequestPasswordView from "@/views/Auth/RequestPasswordView.vue";
import SignupView from "@/views/Auth/SignupView.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeView,
  },
  {
    path: "/restaurants",
    name: "Restaurants",
    component: RestaurantsView,
  },
  {
    path: "/restaurants/descobrir/:category",
    name: "RestaurantsCategory",
    // component: RestaurantsCategoryView,
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
