<template>
  <button
    :type="type"
    class="w-full rounded-lg bg-brand-purple-1 px-4 py-3 text-sm font-bold text-white shadow-purple transition duration-300 ease-in-out hover:bg-brand-purple-2"
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
