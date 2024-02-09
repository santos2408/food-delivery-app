<template>
  <div class="mb-5 flex items-center justify-between px-4 lg:px-10 2xl:px-0">
    <h2 class="text-3xl font-bold text-brand-neutral-500">
      <slot name="title"></slot>
    </h2>

    <router-link
      v-if="hasButton"
      :to="link"
      class="rounded-full border-[1px] border-brand-primary-500 px-5 py-3 text-xsm font-bold uppercase text-brand-primary-500 transition duration-150 hover:bg-brand-primary-500 hover:text-white"
    >
      <slot name="button"></slot>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "HeaderSection",
  props: {
    hasButton: {
      type: Boolean,
      required: true,
    },
    link: {
      type: String,
      required: false,
      default: "/",
    },
  },
};
</script>
