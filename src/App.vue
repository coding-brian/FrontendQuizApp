<script setup>
import ToggleButton from '@/components/ToggleButton.vue'
</script>

<template>
  <main class="w-[1160px]">
    <header class="flex items-center justify-between mt-[83px]">
      <div class="flex items-center">
        <div
          class="mr-[24px] w-[56px] h-[56px] flex items-center justify-center bg-magnolia rounded-[8px]"
        >
          <img src="/images/icon-accessibility.svg" alt="" />
        </div>
        <span class="heading-s">Accessibility</span>
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
