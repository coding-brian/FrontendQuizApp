<script setup>
import { useStorage } from '@vueuse/core'
import { onMounted, ref, watch } from 'vue'
import { getTypeById } from '@/apis/get.js'
import ToggleButton from '@/components/ToggleButton.vue'
import { useRoute } from 'vue-router'

const storage = useStorage('data', {})

const type = ref(null)
const route = useRoute()

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

const chnageType = async () => {
  if (route.name !== 'home') {
    type.value = await getTypeById(storage.value.subject)
  } else {
    type.value = null
  }
}

watch(
  () => route.name,
  async () => {
    await chnageType()
  },
)

onMounted(async () => {
  if (Object.keys(storage.value).length === 0) {
    storage.value = {
      subject: null,
      question: {
        numberOfQuestion: 0,
        count: 0,
      },
      numberOfCurrectAnswer: 0,
    }
  }

  await chnageType()
})
</script>

<template>
  <main class="w-[1160px]">
    <header
      class="flex items-center mt-[83px]"
      :class="{
        'justify-between': type !== null && type !== undefined,
        'justify-end': !type,
      }"
    >
      <div class="flex items-center" v-if="type">
        <div
          class="mr-[24px] w-[56px] h-[56px] flex items-center justify-center rounded-[8px]"
          :class="getTypeIconBgClass(type)"
        >
          <img :src="'/images/' + type.icon + '.svg'" alt="" />
        </div>
        <span class="heading-s">{{ type.name }}</span>
      </div>
      <div class="flex gap-4 items-center">
        <img src="/images/icon-sun-dark.svg" alt="" />
        <ToggleButton></ToggleButton>
        <img src="/images/icon-moon-dark.svg" alt="" srcset="" />
      </div>
    </header>
    <RouterView />
  </main>
</template>

<style scoped></style>
