<template>
  <ul class="flex flex-row flex-nowrap gap-3">
    <li v-for="(step, index) in steps" :key="step.step" class="flex w-[70px] flex-col">
      <div class="mb-3 grid grid-cols-[auto_1fr] items-center gap-3">
        <span
          :class="{
            'current-progress-circle': step.step === currentStep,
            'default-progress-circle': step.step !== currentStep && !step.completed,
            'completed-progress-circle': step.completed,
          }"
        >
        </span>

        <span
          v-if="index !== steps.length - 1"
          :class="{
            'default-progress-line': !step.completed,
            'completed-progress-line': step.step !== currentStep && step.completed,
          }"
        >
        </span>
      </div>
      <p class="text-sm font-semibold text-brand-dark-1">{{ step.title }}</p>
    </li>
  </ul>
</template>

<script>
export default {
  name: "SignupProgress",
  props: {
    steps: {
      type: Array,
      required: true,
    },
    currentStep: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
.current-progress-circle {
  @apply inline-block h-4 w-4 rounded-full bg-brand-purple-1;
}

.completed-progress-circle {
  @apply relative inline-block h-4 w-4 rounded-full bg-[#19BF70];
}

.completed-progress-circle::after {
  content: "";
  position: absolute;
  left: 6px;
  top: 3px;
  width: 4px;
  height: 8px;
  border: solid #fff;
  border-width: 0 2px 2px 0;
  transform: rotate(45deg);
}

.default-progress-circle {
  @apply inline-block h-4 w-4 rounded-full bg-brand-gray-3;
}

.completed-progress-line {
  @apply inline-block h-[2px] w-full bg-[#19bf6fa8];
}

.default-progress-line {
  @apply inline-block h-[2px] w-full bg-brand-gray-3;
}
</style>
