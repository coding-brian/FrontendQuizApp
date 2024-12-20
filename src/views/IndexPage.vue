<script setup>
import { useRouter } from 'vue-router'
import { getType } from '@/apis/get.js'
import { onMounted, ref } from 'vue'
import { useStorage } from '@vueuse/core'

const router = useRouter()
const types = ref([])
const selectedType = ref(null)
const storage = useStorage('data', {
  subject: null,
  question: {
    numberOfQuestion: 0,
    count: 0,
  },
  numberOfCurrectAnswer: 0,
})

const go = (type) => {
  if (storage.value.subject !== type.id) {
    storage.value.question.numberOfQuestion = 0
    storage.value.numberOfCurrectAnswer = 0
  }
  storage.value.subject = type.id
  selectedType.value = type
  router.push({ name: 'question' })
}

const getTypeIconBgClass = (type) => {
  switch (type.iconBgColor) {
    case 'old-lace':
      return 'bg-old-lace'
    case 'light-cyan':
      return 'bg-light-cyan'
    case 'alice-blue':
      return 'bg-alice-blue'
    case 'magnolia':
      return 'bg-magnolia'
  }
}

onMounted(async () => {
  types.value = await getType()
})
</script>

<template>
  <div class="flex justify-between mt-[85px]">
    <div>
      <span class="heading-l-regular text-dark-navy block">Welcome to the</span>
      <span class="heading-l-regular text-dark-navy block">Frontend Quiz!</span>
      <span class="body-s text-grey-navy block mt-12">Frontend Quiz!</span>
    </div>
    <ul class="list-none gap-[24px] flex flex-col">
      <li
        v-for="type in types"
        :key="type.id"
        class="cursor-pointer flex items-center p-[20px] bg-white rounded-[24px] w-[564px] h-[96px]"
        @click="go(type)"
      >
        <div
          class="w-[56px] h-[56px] flex items-center justify-center rounded-[8px] mr-8"
          :class="getTypeIconBgClass(type)"
        >
          <img :src="'/images/' + type.icon + '.svg'" alt="" />
        </div>
        <span class="heading-s">{{ type.name }}</span>
      </li>
    </ul>
  </div>
</template>

<style scoped></style>
