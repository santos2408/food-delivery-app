import { createRouter, createWebHashHistory } from "vue-router";

import LoginView from "@/views/Login/LoginView.vue";
import ResetPasswordView from "@/views/Login/ResetPasswordView.vue";

const routes = [
  {
    path: "/login",
    component: LoginView,
  },
  {
    path: "/resetpassword",
    component: ResetPasswordView,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
