<template>
  <ul class="flex flex-row flex-nowrap gap-3">
    <li class="flex w-[70px] flex-col">
      <div class="mb-3 grid grid-cols-[auto_1fr] items-center gap-3">
        <span
          class="inline-block h-3 w-3 rounded-full bg-brand-purple-1"
        ></span>
        <span class="inline-block h-[2px] w-full bg-brand-gray-3"></span>
      </div>
      <p class="text-sm font-semibold text-brand-dark-1">Account type</p>
    </li>

    <li class="flex w-[70px] flex-col">
      <div class="mb-3 grid grid-cols-[auto_1fr] items-center gap-3">
        <span class="inline-block h-3 w-3 rounded-full bg-brand-gray-3"></span>
        <span class="inline-block h-[2px] w-full bg-brand-gray-3"></span>
      </div>
      <p class="text-sm font-semibold text-brand-gray-1">Personal details</p>
    </li>

    <li class="flex w-[70px] flex-col">
      <div class="mb-3 grid grid-cols-[auto_1fr] items-center gap-3">
        <span class="inline-block h-3 w-3 rounded-full bg-brand-gray-3"></span>
        <span class="inline-block h-[2px] w-full bg-brand-gray-3"></span>
      </div>
      <p class="text-sm font-semibold text-brand-gray-1">Additional info</p>
    </li>

    <li class="flex flex-col">
      <span class="mb-3 h-3 w-3 rounded-full bg-brand-gray-3"></span>
      <p class="text-sm font-semibold text-brand-gray-1">Confirmation</p>
    </li>
  </ul>
</template>

<script>
export default {
  name: "SignupProgress",
};
</script>
