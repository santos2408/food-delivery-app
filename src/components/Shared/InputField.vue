<template>
  <input :id="id" :type="type" />
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
