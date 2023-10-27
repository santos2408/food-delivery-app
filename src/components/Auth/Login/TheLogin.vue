<template>
  <main class="h-full flex-1 px-4 py-5 xl:w-[650px] xl:flex-initial">
    <div class="mx-auto flex h-full max-w-sm flex-col justify-between">
      <header-logo />

      <div>
        <h1 class="mb-5 text-6xl font-bold text-brand-neutral-800">Login</h1>
        <p class="mb-8 text-base leading-custom tracking-custom text-brand-neutral-400">
          Entre com os dados que você inseriu ao criar a conta.
        </p>

        <div>
          <button
            type="button"
            class="flex w-full items-center justify-center gap-1 rounded-md border-[1px] border-brand-neutral-200 border-opacity-50 p-3 transition duration-300 ease-in-out hover:bg-brand-neutral-200 hover:bg-opacity-5"
          >
            <google-icon />
            <span class="text-sm text-brand-neutral-400">Entrar com Google</span>
          </button>

          <div class="my-6 flex items-center justify-center gap-3">
            <span
              class="inline-block h-[1px] w-16 bg-brand-neutral-200 bg-opacity-50"
            ></span>
            <span class="text-xsm text-brand-neutral-400">Ou</span>
            <span
              class="inline-block h-[1px] w-16 bg-brand-neutral-200 bg-opacity-50"
            ></span>
          </div>
        </div>

        <login-form />
      </div>

      <div class="text-center">
        <p class="text-bold text-sm text-brand-neutral-400">
          Novo na Yumz?
          <router-link
            :to="{ name: 'Signup' }"
            href="#"
            class="font-bold text-brand-primary-500"
          >
            Criar uma conta
          </router-link>
        </p>
      </div>
    </div>
  </main>
</template>

<script>
import GoogleIcon from "@/assets/Icons/GoogleIcon.vue";
import HeaderLogo from "@/components/Shared/Auth/HeaderLogo.vue";
import LoginForm from "@/components/Auth/Login/LoginForm.vue";

export default {
  name: "TheLogin",
  components: {
    LoginForm,
    HeaderLogo,
    GoogleIcon,
  },
};
</script>
