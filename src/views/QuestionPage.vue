<script setup>
import ItemButton from '@/components/ItemButton.vue'
import { onMounted, ref, watchEffect } from 'vue'
import { useRoute } from 'vue-router'
import { getQuestionByTypeId } from '@/apis/get.js'

const route = useRoute()
const quesions = ref([])
const numberOfQuestion = ref(0)

const progress = ref(null)

onMounted(async () => {
  if (route.params.subject) {
    quesions.value = await getQuestionByTypeId(route.params.subject)
  }
})

watchEffect(() => {
  if (progress.value) {
    progress.value.style = `width:${((numberOfQuestion.value + 1) / quesions.value.length) * 100}%`
  }
})
</script>
<template>
  <template v-if="quesions && quesions.length > 0">
    <div class="flex justify-between mt-[85px]">
      <div class="flex flex-col justify-between">
        <div class="w-[465px]">
          <span class="text-grey-navy body-s block mb-[27px]"
            >Question {{ numberOfQuestion + 1 }} of {{ quesions.length }}</span
          >
          <span class="text-dark-navy heading-m block">{{
            quesions[numberOfQuestion].question
          }}</span>
        </div>
        <div class="bg-white w-full rounded-[999px] py-[4px] pl-[4px] h-[16px]">
          <div class="bg-purple rounded-[104px] h-[8px]" ref="progress"></div>
        </div>
      </div>
      <ul class="flex flex-col gap-[24px]">
        <ItemButton
          v-for="(option, index) in quesions[numberOfQuestion].options"
          :key="option"
          :option="{ name: option, index }"
        ></ItemButton>
      </ul>
    </div>
    <div class="w-full flex justify-end mt-[32px] hover:curser-pointer">
      <button class="w-[564px] h-[96px] bg-purple rounded-[24px]">
        <span class="text-white heading-s">Submit Answer</span>
      </button>
    </div>
  </template>
</template>
