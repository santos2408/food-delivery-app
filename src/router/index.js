import { createRouter, createWebHashHistory } from "vue-router";

import LoginView from "@/views/LoginView.vue";
import ForgotPasswordView from "@/views/ForgotPasswordView.vue";

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
