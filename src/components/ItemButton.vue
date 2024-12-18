<script setup>
const props = defineProps({ option: Object })
</script>
<template>
  <li
    class="cursor-pointer flex items-center p-[20px] bg-white rounded-[24px] w-[564px] h-[96px]"
    v-if="props.option"
  >
    <div
      class="w-[56px] h-[56px] flex items-center justify-center bg-light-grey rounded-[8px] mr-8"
    >
      <span class="text-grey-navy">{{ props.option.name }}</span>
    </div>
    <span class="heading-s text-dark-navy">{{ props.option.answer }}</span>
  </li>
</template>
<style scoped></style>
