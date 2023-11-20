<template>
  <main class="h-full flex-1 p-5 xl:w-[650px] xl:flex-initial">
    <div class="mx-auto flex h-full max-w-sm flex-col xl:w-[430px] xl:max-w-none">
      <header-logo class="mb-20" />

      <div>
        <router-link
          :to="{ name: 'Login' }"
          class="mb-14 flex items-center gap-4 font-semibold text-brand-neutral-400"
        >
          <left-arrow-icon color="#5F6D79" />
          Voltar para o login
        </router-link>

        <h1 class="mb-10 text-5xl font-bold text-brand-neutral-800">Esqueci a senha</h1>
        <p class="mb-8 text-base text-brand-neutral-400">
          Entre com o email cadastrado e nós enviaremos instruções para recuperação da senha.
        </p>

        <form action="">
          <div class="mb-7">
            <label for="email" class="mb-1 block text-sm font-semibold text-brand-neutral-400"
              >Email</label
            >
            <input-field
              id="email"
              v-model="email"
              type="email"
              placeholder="nome@exemplo.com"
              class="block w-full"
            />
          </div>

          <action-button type="submit" text="Continuar" />
        </form>
      </div>

      <div class="mt-auto text-center">
        <p class="text-bold mt-5 text-sm text-brand-neutral-400">
          Você tem alguma dúvida?
          <a href="#" class="font-bold text-brand-primary-400">FAQ</a>
        </p>
      </div>
    </div>
  </main>
</template>

<script>
import ActionButton from "@/components/Shared/ActionButton.vue";
import HeaderLogo from "@/components/Shared/Auth/HeaderLogo.vue";
import InputField from "@/components/Shared/InputField.vue";
import LeftArrowIcon from "@/assets/Icons/LeftArrowIcon.vue";

export default {
  name: "RequestPassword",
  components: {
    ActionButton,
    HeaderLogo,
    InputField,
    LeftArrowIcon,
  },
  data() {
    return {
      email: "",
    };
  },
};
</script>

<style scoped>
input {
  @apply rounded-lg border-[1px] border-brand-neutral-200 border-opacity-50 p-3 placeholder:text-sm placeholder:text-brand-neutral-200 focus-visible:outline-brand-primary-500;
}
</style>
