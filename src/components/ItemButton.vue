<script setup>
import { computed } from 'vue'

const props = defineProps({ option: Object })

const optionIcon = computed(() => {
  switch (props.option.index) {
    case 0:
      return 'A'
    case 1:
      return 'B'
    case 2:
      return 'C'
    case 3:
      return 'D'
    case 4:
      return 'E'
    case 5:
      return 'F'
    default:
      return 'A'
  }
})
</script>
<template>
  <li
    class="cursor-pointer flex items-center p-[20px] bg-white rounded-[24px] w-[564px] h-[96px]"
    v-if="props.option"
  >
    <div
      class="w-[56px] h-[56px] flex items-center justify-center bg-light-grey rounded-[8px] mr-8"
    >
      <span class="heading-s text-grey-navy">{{ optionIcon }}</span>
    </div>
    <span class="heading-s text-dark-navy">{{ props.option.name }}</span>
  </li>
</template>
<style scoped></style>
