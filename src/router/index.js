import { createRouter, createWebHashHistory } from "vue-router";

import LoginView from "@/views/Login/LoginView.vue";
import ForgotPasswordView from "@/views/Login/ForgotPasswordView.vue";

const routes = [
  {
    path: "/login",
    component: LoginView,
  },
  {
    path: "/forgotpassword",
    component: ForgotPasswordView,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
