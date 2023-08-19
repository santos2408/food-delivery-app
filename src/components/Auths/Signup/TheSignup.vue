<template>
  <main class="h-screen flex-1 px-4 py-5 xl:w-[650px] xl:flex-initial">
    <div class="mx-auto flex h-full max-w-sm flex-col">
      <header-logo class="mb-10" />

      <div class="h-full">
        <signup-progress class="mb-16" :steps="steps" :current-step="currentStep" />

        <form action="">
          <div v-if="showCurrentStep('account-type')" data-step="account-type">
            <div class="mb-10">
              <h1 class="mb-5 text-4xl font-bold text-brand-dark-1">Sign up</h1>
              <p class="mb-8 text-sm text-brand-gray-1">
                Register to create your restaurant or personal account
              </p>
            </div>

            <account-type />
            <div>
              <action-button
                type="button"
                text="Continue"
                class="mb-6"
                @click="nextStep"
              />
            </div>
          </div>

          <div v-if="showCurrentStep('personal-details')" data-step="personal-details">
            <div class="mb-10">
              <h1 class="mb-5 text-4xl font-bold text-brand-dark-1">Personal details</h1>
              <p class="mb-8 text-sm text-brand-gray-1">
                Enter your data that you will use for entering.
              </p>
            </div>

            <div class="mb-10 space-y-8">
              <div>
                <label
                  for="email"
                  class="mb-1 block text-sm font-semibold text-brand-gray-1"
                >
                  Email
                </label>
                <input-field
                  id="email"
                  v-model="email"
                  type="email"
                  placeholder="name@example.com"
                  class="block w-full"
                />
              </div>

              <div>
                <label
                  for="password"
                  class="mb-1 block text-sm font-semibold text-brand-gray-1"
                >
                  Password
                </label>
                <input-field
                  id="password"
                  v-model="password"
                  type="password"
                  placeholder="min. 8 characters"
                  class="block w-full"
                />
              </div>

              <div>
                <label
                  for="confirm-password"
                  class="mb-1 block text-sm font-semibold text-brand-gray-1"
                >
                  Confirm password
                </label>
                <input-field
                  id="confirm-password"
                  v-model="confirmPassword"
                  type="password"
                  placeholder="min. 8 characters"
                  class="block w-full"
                />
              </div>
            </div>

            <action-button type="button" text="Continue" class="mb-7" @click="nextStep" />

            <button
              class="mx-auto mb-16 block font-semibold text-brand-gray-1"
              @click="previousStep"
            >
              Back
            </button>
          </div>

          <div v-if="showCurrentStep('additional-info')" data-step="additional-info">
            <div class="mb-10">
              <h1 class="mb-5 text-4xl font-bold text-brand-dark-1">Additional info</h1>
              <p class="mb-8 text-sm text-brand-gray-1">
                Enter your additional information.
              </p>
            </div>

            <div class="mb-7">
              <label
                for="phone"
                class="mb-1 block text-sm font-semibold text-brand-gray-1"
              >
                Phone number
              </label>

              <input-field
                id="phone"
                v-model="phone"
                type="text"
                placeholder="(217) 555-0113"
                class="block w-full"
              />
            </div>

            <the-checkbox text="Turn on 2 factor authentication" class="mb-10" />

            <action-button type="button" text="Continue" class="mb-7" @click="nextStep" />

            <button
              class="mx-auto mb-16 block font-semibold text-brand-gray-1"
              @click="previousStep"
            >
              Back
            </button>
          </div>

          <div v-if="showCurrentStep('confirmation')" data-step="confirmation">
            <div class="mb-10">
              <h1 class="mb-5 text-4xl font-bold text-brand-dark-1">Confirmation</h1>
              <p class="mb-8 text-sm text-brand-gray-1">
                Enter your security code that we sent to your phone.
              </p>
            </div>

            <div class="mb-7">
              <label
                for="phone"
                class="mb-1 block text-sm font-semibold text-brand-gray-1"
              >
                Confirmation code
              </label>

              <input-field
                id="confirmPhone"
                v-model="confirmPhone"
                type="text"
                placeholder="XXX - XXX - XXX"
                class="block w-full"
              />
            </div>

            <the-checkbox text="Remember this device" class="mb-10" />

            <action-button type="button" text="Complete" class="mb-7" />

            <button
              class="mx-auto mb-16 block font-semibold text-brand-gray-1"
              @click="previousStep"
            >
              Back
            </button>
          </div>
        </form>
      </div>

      <div class="text-center">
        <p class="text-bold py-2 text-sm text-brand-gray-1">
          Don't have an account?
          <router-link
            :to="{ name: 'Login' }"
            href="#"
            class="font-bold text-brand-purple-1"
          >
            Sign in
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
          title: "Account Type",
          completed: false,
        },
        {
          step: "personal-details",
          title: "Personal Details",
          completed: false,
        },
        {
          step: "additional-info",
          title: "Additional Info",
          completed: false,
        },
        {
          step: "confirmation",
          title: "Confirmation",
          completed: false,
        },
      ],

      currentStep: "account-type",
      email: "",
      password: "",
      confirmPassword: "",
      phone: "",
      confirmPhone: "",
    };
  },
  computed: {
    showCurrentStep() {
      return (stepName) => this.currentStep === stepName;
    },
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
