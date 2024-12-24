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

  if (storage.value && storage.value.subject !== null && storage.value.subject !== undefined) {
    const type = types.value.filter((item) => item.id === storage.value.subject)[0]
    go(type)
  }
})
</script>

<template>
  <div
    class="lg:flex lg:flex-row lg:justify-between lg:mt-[85px] md:mt-[64px] md:flex md:flex-col md:justify-center"
  >
    <div>
      <span class="heading-l-regular text-dark-navy block dark:text-white">Welcome to the</span>
      <span class="heading-l-regular text-dark-navy block dark:text-white">Frontend Quiz!</span>
      <span class="body-s text-grey-navy block lg:mt-12 dark:text-light-bluish"
        >Pick a subject to get started.</span
      >
    </div>
    <ul class="list-none gap-[24px] flex flex-col md:mt-[64px]">
      <li
        v-for="type in types"
        :key="type.id"
        class="cursor-pointer flex items-center p-[20px] bg-white rounded-[24px] w-[564px] h-[96px] dark:bg-navy"
        @click="go(type)"
      >
        <div
          class="w-[56px] h-[56px] flex items-center justify-center rounded-[8px] mr-8"
          :class="getTypeIconBgClass(type)"
        >
          <img :src="'/images/' + type.icon + '.svg'" alt="" />
        </div>
        <span class="heading-s dark:text-white">{{ type.name }}</span>
      </li>
    </ul>
  </div>
</template>

<style scoped></style>
