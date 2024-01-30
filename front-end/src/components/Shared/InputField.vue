<template>
  <input :id="id" :value="modelValue" :type="type" @input="handleInput" />
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
    modelValue: {
      type: String,
      required: true,
    },
  },
  emits: ["update:model-value"],
  methods: {
    handleInput($event) {
      this.$emit("update:model-value", $event.target.value);
    },
  },
};
</script>

<style scoped>
input {
  @apply rounded-lg border-[1px] border-brand-neutral-200 border-opacity-50 p-3 placeholder:text-sm placeholder:text-brand-neutral-200 focus-visible:outline-brand-primary-500;
}
</style>
