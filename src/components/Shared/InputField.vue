<template>
  <input :id="id" :type="type" :value="value" @input="handleInput" />
</template>

<script>
export default {
  name: "InputField",
  props: {
    id: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    value: {
      type: String,
      required: true,
    },
  },
  emits: ["handle-input"],
  methods: {
    handleInput($event) {
      this.$emits("handle-input", $event.taget.value);
    },
  },
};
</script>

<style scoped>
input {
  @apply rounded-lg border-[1px] border-brand-gray-3 p-3 placeholder:text-sm placeholder:text-brand-gray-2 focus-visible:outline-brand-purple-1;
}
</style>
