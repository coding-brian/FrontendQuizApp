<script setup>
import ItemButton from '@/components/ItemButton.vue'
import { onMounted, reactive, ref, watchEffect } from 'vue'
import { getQuestionByTypeId } from '@/apis/get.js'
import { assignToReactive } from '@/composable/assignToReactive.js'
import itemTypeConfig from '@/constant/itemType.json'
import { useStorage } from '@vueuse/core'
import { useRouter } from 'vue-router'

const storage = useStorage('data', {})
const router = useRouter()
const quesions = ref([])
const question = reactive({
  question: '',
  options: [],
  answer: '',
  itemType: null,
  selectedAnswer: null,
})
const progress = ref(null)
const isError = ref(false)

const nextQuestion = () => {
  setTimeout(() => {
    if (storage.value.question.numberOfQuestion + 1 === quesions.value.length) {
      router.push({ name: 'completion' })
    } else {
      storage.value.question.numberOfQuestion++
      assignToReactive(quesions.value[storage.value.question.numberOfQuestion], question)
    }
  }, 500)
}

const submit = () => {
  if (!question.options.some((item) => item.selected)) {
    isError.value = true
    return
  }
  isError.value = false
  const option = question.options.filter((item) => item.selected)[0]

  if (question.answer === option.name) {
    const option = question.options.filter((item) => item.name === question.answer)[0]
    option.itemType = itemTypeConfig.pickUpCorrectly
    storage.value.numberOfCurrectAnswer++
  }

  if (question.answer !== option.name) {
    question.options.forEach((item) => {
      if (item.name === option.name) {
        item.itemType = itemTypeConfig.incorrect
      }

      if (item.name === question.answer) {
        item.itemType = itemTypeConfig.correct
      }
    })
  }

  nextQuestion()
}

const setSelectedAnswer = (name) => {
  isError.value = false
  question.options.forEach((item) => {
    if (item.name === name) {
      item.selected = true
    } else {
      item.selected = false
    }
  })
}

onMounted(async () => {
  if (storage.value.subject !== null && storage.value.subject !== undefined) {
    quesions.value = await getQuestionByTypeId(storage.value.subject)
    storage.value.question.count = quesions.value.length
    assignToReactive(quesions.value[storage.value.question.numberOfQuestion], question)
  }
})

watchEffect(() => {
  if (progress.value) {
    progress.value.style = `width:${((storage.value.question.numberOfQuestion + 1) / quesions.value.length) * 100}%`
  }
})
</script>

<template>
  <template v-if="question && question.question">
    <div
      class="lg:flex lg:justify-between lg:flex-row lg:mt-[85px] md:mt-[49px] md:gap-16 md:flex md:flex-col"
    >
      <div class="lg:flex lg:flex-col lg:justify-between">
        <div class="w-[465px] md:max-w-full">
          <span class="text-grey-navy body-s block mb-[27px] dark:text-light-bluish"
            >Question {{ storage.question.numberOfQuestion + 1 }} of {{ quesions.length }}</span
          >
          <span class="text-dark-navy heading-m block dark:text-white">{{
            question.question
          }}</span>
        </div>
        <div
          class="bg-white w-full rounded-[999px] py-[4px] pl-[4px] h-[16px] dark:bg-navy md:mt-[40px]"
        >
          <div class="bg-purple rounded-[104px] h-[8px]" ref="progress"></div>
        </div>
      </div>
      <ul class="flex flex-col gap-[24px]">
        <ItemButton
          v-for="(option, index) in question.options"
          :key="option.name"
          :option="{
            name: option.name,
            index,
            itemType: option.itemType,
            selected: option.selected,
          }"
          @selectedAnswer="setSelectedAnswer"
        ></ItemButton>
      </ul>
    </div>
    <div class="w-full flex lg:justify-end my-[32px] hover:curser-pointer">
      <button
        class="lg:w-[564px] h-[96px] bg-purple rounded-[24px] lg:hover:bg-opacity-50 md:w-full md:active:bg-opacity-50"
        @click="submit"
      >
        <span class="text-white heading-s">Submit Answer</span>
      </button>
    </div>
    <div class="w-full flex lg:justify-end md:justify-center hover:curser-pointer" v-if="isError">
      <div class="w-[564px] flex justify-center items-center">
        <img src="/images/icon-incorrect.svg" alt="" srcset="" />
        <span class="body-m text-red">Please select an answer</span>
      </div>
    </div>
  </template>
</template>
