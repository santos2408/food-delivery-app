<template>
  <button :type="type" :class="buttonClass">
    {{ text }}
  </button>
</template>

<script>
export default {
  name: "ActionButton",
  props: {
    type: {
      type: String,
      required: true,
      default: "button",
      validator(value) {
        return ["button", "submit"].includes(value);
      },
    },
    text: {
      type: String,
      required: true,
    },
    styleType: {
      type: String,
      required: true,
      validator(value) {
        return ["primary", "secondary"].includes(value);
      },
    },
  },
  computed: {
    buttonClass() {
      return {
        [this.styleType]: true,
      };
    },
  },
};
</script>

<style scoped>
button {
  @apply px-4 py-3 font-bold transition duration-300 ease-in-out;
}

.primary {
  @apply w-full rounded-lg bg-brand-primary-500 text-sm text-brand-white shadow-primary hover:bg-brand-primary-400;
}

.secondary {
  @apply border border-brand-primary-500 px-8 py-3 font-semibold text-brand-primary-500 transition duration-150 hover:bg-brand-primary-500 hover:text-white;
}
</style>
