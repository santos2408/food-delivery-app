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
    path: "/restaurantes",
    name: "Restaurants",
    component: RestaurantsView,
  },
  {
    path: "/promocoes",
    name: "Deals",
    // component: RestaurantsView,
  },
  {
    path: "/pedidos",
    name: "Orders",
    // component: RestaurantsView,
  },
  {
    path: "/restaurants/descobrir/:categoria",
    name: "RestaurantsCategory",
    // component: RestaurantsCategoryView,
  },
  {
    path: "/login",
    name: "Login",
    component: LoginView,
  },
  {
    path: "/recuperar-senha",
    name: "RequestPassword",
    component: RequestPasswordView,
  },
  {
    path: "/cadastrar",
    name: "Signup",
    component: SignupView,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
