<script setup>
import ItemButton from '@/components/ItemButton.vue'
import { useRoute } from 'vue-router'

const route = useRoute()
</script>
<template>
  <!-- {{ route.params }} -->
  <ItemButton></ItemButton>
</template>
