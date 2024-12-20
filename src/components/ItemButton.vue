<script setup>
import { computed } from 'vue'
import itemTypeConfig from '@/constant/itemType.json'

const props = defineProps({ option: Object, itemType: Number, selectedAnswer: String })
const emit = defineEmits(['selectedAnswer'])

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

const borderColorClassByitemTypeConfig = computed(() => {
  return {
    'border-green': props.option.itemType === itemTypeConfig.pickUpCorrectly,
    'border-red': props.option.itemType === itemTypeConfig.incorrect,
    'border-[3px]':
      props.option.itemType === itemTypeConfig.pickUpCorrectly ||
      props.option.itemType === itemTypeConfig.incorrect,
  }
})

const bgColorClassByitemTypeConfig = computed(() => {
  switch (props.option.itemType) {
    case itemTypeConfig.pickUpCorrectly:
      return 'bg-green'
    case itemTypeConfig.incorrect:
      return 'bg-red'
    default:
      return 'bg-light-grey'
  }
})

const textColorClassByitemTypeConfig = computed(() => {
  return {
    'text-white':
      props.option.itemType === itemTypeConfig.pickUpCorrectly ||
      props.option.itemType === itemTypeConfig.incorrect,
  }
})

const imageSrcByitemTypeConfig = computed(() => {
  switch (props.option.itemType) {
    case itemTypeConfig.correct:
      return '/images/icon-correct.svg'
    case itemTypeConfig.pickUpCorrectly:
      return '/images/icon-correct.svg'
    case itemTypeConfig.incorrect:
      return '/images/icon-incorrect.svg'
    default:
      return null
  }
})
</script>

<template>
  <button
    class="cursor-pointer flex items-center justify-between p-[20px] w-[564px] bg-white rounded-[24px] focus:border-purple focus:border-[3px]"
    :class="borderColorClassByitemTypeConfig"
    v-if="props.option"
    @click="emit('selectedAnswer', props.option.name)"
  >
    <div class="flex items-center rounded-[8px]">
      <div
        class="w-[56px] h-[56px] flex justify-center items-center rounded-[8px] mr-8"
        :class="[bgColorClassByitemTypeConfig]"
      >
        <span class="heading-s text-grey-navy" :class="textColorClassByitemTypeConfig">{{
          optionIcon
        }}</span>
      </div>
      <span class="heading-s text-dark-navy">{{ props.option.name }}</span>
    </div>
    <img :src="imageSrcByitemTypeConfig" alt="" srcset="" />
  </button>
</template>

<style scoped>
button:hover div div {
  background-color: theme('colors.magnolia');
}

button:hover div div span {
  color: theme('colors.purple');
}

button:focus div div {
  background-color: theme('colors.purple');
}

button:focus div div span {
  color: white;
}
</style>
