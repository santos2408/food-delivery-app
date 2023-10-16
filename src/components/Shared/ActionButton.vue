<template>
  <button
    :type="type"
    class="w-full rounded-lg bg-brand-primary-500 px-4 py-3 text-sm font-bold text-brand-white shadow-primary transition duration-300 ease-in-out hover:bg-brand-primary-400"
  >
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
  },
};
</script>
