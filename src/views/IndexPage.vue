<script setup>
import { useRouter } from 'vue-router'
import { getType } from '@/apis/get.js'
import { onMounted, ref } from 'vue'
const router = useRouter()
const types = ref([])

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
        @click="router.push({ name: 'question', params: { subject: type.id } })"
      >
        <div
          class="w-[56px] h-[56px] flex items-center justify-center rounded-[8px] mr-8"
          :class="['bg-' + type['icon-bg-color']]"
        >
          <img :src="'/images/' + type.icon + '.svg'" alt="" />
        </div>
        <span class="heading-s">{{ type.name }}</span>
      </li>
    </ul>
  </div>
</template>

<style scoped></style>
