import { createRouter, createWebHashHistory } from "vue-router";

import LoginView from "@/views/LoginView.vue";
import ForgotPasswordView from "@/views/ForgotPasswordView.vue";
import SignupView from "@/views/SignupView.vue";

const routes = [
  {
    path: "/login",
    component: LoginView,
  },
  {
    path: "/forgotpassword",
    component: ForgotPasswordView,
  },
  {
    path: "/signup",
    component: SignupView,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
