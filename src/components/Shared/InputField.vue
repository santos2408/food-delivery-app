<template>
  <input
    :id="id"
    :type="type"
    class="block w-full rounded-lg border-[1px] p-3 placeholder:text-sm placeholder:text-brand-gray-2 focus-visible:outline-brand-purple-1"
  />
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
  },
};
</script>
