<template>
  <main
    class="h-screen flex-1 px-4 py-5 md:px-10 md:pt-10 lg:h-screen xl:w-[650px] xl:flex-initial"
  >
    <div class="mx-auto flex h-full flex-col sm:max-w-lg md:max-w-full">
      <header-logo
        v-if="handleLogoVisibility"
        :color="handleLogoColor"
        class="mx-auto mb-14 block max-w-md md:hidden xl:block"
      />

      <div class="h-full">
        <signup-progress class="mb-16" :steps="steps" :current-step="currentStep" />

        <form
          action=""
          class="mx-auto max-w-md md:mx-[initial] md:max-w-full xl:mx-auto xl:max-w-md"
        >
          <div
            v-if="showCurrentStep('account-type')"
            class="md:mb-16"
            data-step="account-type"
          >
            <div class="mb-10">
              <h1 class="mb-5 text-5xl font-bold text-brand-neutral-800">Criar Conta</h1>
              <p class="mb-8 text-base text-brand-neutral-400">
                Cadastre para criar sua conta pessoal ou do restaurante
              </p>
            </div>

            <account-type />

            <div class="flex justify-end">
              <action-button
                type="button"
                text="Continuar"
                class="mb-6 md:w-52"
                @click="nextStep"
              />
            </div>
          </div>

          <div
            v-if="showCurrentStep('personal-details')"
            class="md:mb-16"
            data-step="personal-details"
          >
            <div class="mb-10">
              <h1 class="mb-5 text-5xl font-bold text-brand-neutral-800">
                Informações Pessoais
              </h1>
              <p class="mb-8 text-base text-brand-neutral-300">
                Entre com os dados que serão usados no acesso
              </p>
            </div>

            <div class="mb-10 space-y-8">
              <div>
                <label
                  for="email"
                  class="mb-1 block text-sm font-semibold text-brand-neutral-400"
                >
                  Email
                </label>
                <input-field
                  id="email"
                  v-model="email"
                  type="email"
                  placeholder="nome@exemplo.com"
                  class="block w-full"
                />
              </div>

              <div>
                <label
                  for="password"
                  class="mb-1 block text-sm font-semibold text-brand-gray-1"
                >
                  Senha
                </label>
                <input-field
                  id="password"
                  v-model="password"
                  type="password"
                  placeholder="min. 8 caracteres"
                  class="block w-full"
                />
              </div>

              <div>
                <label
                  for="confirm-password"
                  class="mb-1 block text-sm font-semibold text-brand-gray-1"
                >
                  Confirmar senha
                </label>
                <input-field
                  id="confirm-password"
                  v-model="confirmPassword"
                  type="password"
                  placeholder="min. 8 caracteres"
                  class="block w-full"
                />
              </div>
            </div>

            <div class="flex flex-col justify-end md:flex-row md:items-center md:gap-16">
              <button
                class="order-2 mx-auto mb-16 block font-semibold text-brand-neutral-400 md:order-1 md:m-0"
                @click="previousStep"
              >
                Voltar
              </button>

              <action-button
                type="button"
                text="Continuar"
                class="order-1 mb-7 md:order-2 md:m-0 md:w-52"
                @click="nextStep"
              />
            </div>
          </div>

          <div
            v-if="showCurrentStep('additional-info')"
            class="md:mb-16"
            data-step="additional-info"
          >
            <div class="mb-10">
              <h1 class="mb-5 text-5xl font-bold text-brand-neutral-800">
                Informações Adicionais
              </h1>
              <p class="mb-8 text-base text-brand-neutral-400">
                Insira o número do celular
              </p>
            </div>

            <div class="mb-7">
              <label
                for="phone"
                class="mb-1 block text-sm font-semibold text-brand-neutral-400"
              >
                Número de celular
              </label>

              <input-field
                id="phone"
                v-model="phone"
                type="text"
                placeholder="(00) 00000-0000"
                class="block w-full"
              />
            </div>

            <the-checkbox text="Turn on 2 factor authentication" class="mb-10" />

            <div class="flex flex-col justify-end md:flex-row md:items-center md:gap-16">
              <button
                class="order-2 mx-auto mb-16 block font-semibold text-brand-neutral-400 md:order-1 md:m-0"
                @click="previousStep"
              >
                Voltar
              </button>

              <action-button
                type="button"
                text="Continuar"
                class="order-1 mb-7 md:order-2 md:m-0 md:w-52"
                @click="nextStep"
              />
            </div>
          </div>

          <div
            v-if="showCurrentStep('confirmation')"
            class="md:mb-16"
            data-step="confirmation"
          >
            <div class="mb-10">
              <h1 class="mb-5 text-5xl font-bold text-brand-neutral-800">Confirmação</h1>
              <p class="mb-8 text-base text-brand-neutral-400">
                Insira o código de segurança enviado para o seu email.
              </p>
            </div>

            <div class="mb-7">
              <label
                for="phone"
                class="mb-1 block text-sm font-semibold text-brand-neutral-400"
              >
                Código de confirmação
              </label>

              <input-field
                id="confirmPhone"
                v-model="confirmPhone"
                type="text"
                placeholder="XXX - XXX - XXX"
                class="block w-full"
              />
            </div>

            <div class="flex flex-col justify-end md:flex-row md:items-center md:gap-16">
              <button
                class="order-2 mx-auto mb-16 block font-semibold text-brand-neutral-400 md:order-1 md:m-0"
                @click="previousStep"
              >
                Voltar
              </button>

              <action-button
                type="button"
                text="Completar"
                class="order-1 mb-7 md:order-2 md:m-0 md:w-52"
                @click="nextStep"
              />
            </div>
          </div>
        </form>
      </div>

      <div class="text-center">
        <p class="text-bold py-2 text-sm text-brand-neutral-400">
          Você já tem uma conta?
          <router-link
            :to="{ name: 'Login' }"
            href="#"
            class="font-bold text-brand-primary-500"
          >
            Login
          </router-link>
        </p>
      </div>
    </div>
  </main>
</template>

<script>
import ActionButton from "@/components/Shared/ActionButton.vue";
import AccountType from "@/components/Auths/Signup/AccountType.vue";
import HeaderLogo from "@/components/Shared/Auths/HeaderLogo.vue";
import InputField from "@/components/Shared/InputField.vue";
import SignupProgress from "@/components/Auths/Signup/SignupProgress.vue";
import TheCheckbox from "@/components/Shared/TheCheckbox.vue";

export default {
  name: "TheSignup",
  components: {
    ActionButton,
    AccountType,
    HeaderLogo,
    InputField,
    SignupProgress,
    TheCheckbox,
  },
  data() {
    return {
      steps: [
        {
          step: "account-type",
          title: "Tipo de Conta",
          completed: false,
        },
        {
          step: "personal-details",
          title: "Informações Pessoais",
          completed: false,
        },
        {
          step: "additional-info",
          title: "Informações Adicionais",
          completed: false,
        },
        {
          step: "confirmation",
          title: "Confirmação",
          completed: false,
        },
      ],

      currentStep: "account-type",
      email: "",
      password: "",
      confirmPassword: "",
      phone: "",
      confirmPhone: "",

      screenWidth: window.innerWidth,
      isADesktopDevice: null,
    };
  },
  computed: {
    showCurrentStep() {
      return (stepName) => this.currentStep === stepName;
    },
    handleLogoColor() {
      const isMobileWidth = this.screenWidth < 768;
      const isDesktopWidth = this.screenWidth > 1279;
      return isMobileWidth || isDesktopWidth ? undefined : "";
    },
    handleLogoVisibility() {
      const isMobileWidth = this.screenWidth < 768;
      const isDesktopWidth = this.screenWidth > 1279;
      return isMobileWidth || isDesktopWidth ? true : false;
    },
  },
  mounted() {
    this.isADesktopDevice = this.screenWidth > 767 ? true : false;

    window.addEventListener("resize", () => {
      this.screenWidth = window.innerWidth;
      this.isADesktopDevice = this.screenWidth > 767;
    });
  },
  methods: {
    nextStep() {
      const steps = [
        "account-type",
        "personal-details",
        "additional-info",
        "confirmation",
      ];
      const currentStepIndex = steps.indexOf(this.currentStep);
      const nextStepIndex = currentStepIndex + 1;

      this.steps[currentStepIndex].completed = true;
      this.currentStep = steps[nextStepIndex];
    },
    previousStep() {
      const steps = [
        "account-type",
        "personal-details",
        "additional-info",
        "confirmation",
      ];
      const currentStepIndex = steps.indexOf(this.currentStep);
      const previousStepIndex = currentStepIndex - 1;

      this.steps[previousStepIndex].completed = false;
      this.currentStep = steps[previousStepIndex];
    },
  },
};
</script>
