<script setup>
import { useStorage } from '@vueuse/core'
import { getTypeById } from '@/apis/get.js'
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const storage = useStorage('data', {})
const type = ref(null)
const router = useRouter()

const playAgain = () => {
  storage.value = {
    subject: null,
    question: {
      numberOfQuestion: 0,
      count: 0,
    },
    numberOfCurrectAnswer: 0,
  }

  router.push({ name: 'home' })
}

onMounted(async () => {
  type.value = await getTypeById(storage.value.subject)
})
</script>
<template>
  <div class="flex justify-between mt-[85px]">
    <div>
      <span class="heading-l-regular text-dark-navy block">Quiz completed</span>
      <span class="heading-l-bold text-dark-navy block">You scored...</span>
    </div>
    <div class="w-[564px]">
      <div
        class="flex flex-col items-center justify-between w-full bg-white p-12 rounded-[24px] mb-[32px]"
        v-if="type"
      >
        <div class="flex items-center justify-center mb-[40px]">
          <div
            class="w-[56px] h-[56px] flex items-center justify-center rounded-[8px] mr-8"
            :class="['bg-' + type['iconBgColor']]"
          >
            <img :src="'/images/' + type.icon + '.svg'" alt="" />
          </div>
          <span class="heading-s">{{ type.name }}</span>
        </div>
        <div class="flex flex-col justify-between">
          <span class="text-dark-navy display">{{ storage.numberOfCurrectAnswer }}</span>
          <span class="text-grey-navy body-m">out of {{ storage.question.count }}</span>
        </div>
      </div>
      <button
        class="w-full h-[96px] bg-purple rounded-[24px] hover:bg-opacity-50"
        @click="playAgain"
      >
        <span class="text-white heading-s">Play Again</span>
      </button>
    </div>
  </div>
</template>
<style scoped></style>
