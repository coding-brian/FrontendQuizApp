<script setup>
import ToggleButton from './components/ToggleButton.vue'
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <main class="w-[1160px]">
    <header class="flex items-center justify-between mt-[83px]">
      <div class="flex items-center">
        <div
          class="mr-[24px] w-[56px] h-[56px] flex items-center justify-center bg-magnolia rounded-[8px]"
        >
          <img src="./assets/images/icon-accessibility.svg" alt="" />
        </div>
        <span class="heading-s">Accessibility</span>
      </div>
      <div class="flex gap-4 items-center">
        <img src="./assets/images/icon-sun-dark.svg" alt="" />
        <ToggleButton></ToggleButton>
        <img src="./assets/images/icon-moon-dark.svg" alt="" srcset="" />
      </div>
    </header>
    <div class="flex justify-between mt-[85px]">
      <div class="title">
        <span class="heading-l-regular text-dark-navy block">Welcome to the</span>
        <span class="heading-l-regular text-dark-navy block">Frontend Quiz!</span>
        <span class="body-s text-grey-navy block mt-12">Frontend Quiz!</span>
      </div>
      <ul class="list-none gap-[24px] flex flex-col">
        <li
          class="cursor-pointer flex items-center p-[20px] bg-white rounded-[24px] w-[564px] h-[96px]"
        >
          <div
            class="w-[56px] h-[56px] flex items-center justify-center bg-old-lace rounded-[8px] mr-8"
          >
            <img src="./assets/images/icon-html.svg" alt="" />
          </div>
          <span class="heading-s">HTML</span>
        </li>
        <li
          class="cursor-pointer flex items-center p-[20px] bg-white rounded-[24px] w-[564px] h-[96px]"
        >
          <div
            class="w-[56px] h-[56px] flex items-center justify-center bg-light-cyan rounded-[8px] mr-8"
          >
            <img src="./assets/images/icon-css.svg" alt="" />
          </div>
          <span class="heading-s">CSS</span>
        </li>
        <li
          class="cursor-pointer flex items-center p-[20px] bg-white rounded-[24px] w-[564px] h-[96px]"
        >
          <div
            class="w-[56px] h-[56px] flex items-center justify-center bg-alice-blue rounded-[8px] mr-8"
          >
            <img src="./assets/images/icon-js.svg" alt="" />
          </div>
          <span class="heading-s">Javascript</span>
        </li>
        <li
          class="cursor-pointer flex items-center p-[20px] bg-white rounded-[24px] w-[564px] h-[96px]"
        >
          <div
            class="w-[56px] h-[56px] flex items-center justify-center bg-magnolia rounded-[8px] mr-8"
          >
            <img src="./assets/images/icon-accessibility.svg" alt="" />
          </div>
          <span class="heading-s">Accessibility</span>
        </li>
      </ul>
    </div>
  </main>
  <!-- <RouterView /> -->
</template>

<style scoped></style>
