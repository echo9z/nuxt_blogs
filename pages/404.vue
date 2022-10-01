<template>
  <div>
    <h1>{{ 404 }}</h1>
    There was an error 😱
    <br>
    <button @click="handleError">
      Clear error
    </button>
    <br>
    <NuxtLink to="/">
      Navigate home
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
// const props = defineProps({
//   error: Object,
// })
definePageMeta({
  // 禁止使用的 layout的
  layout: 'custom'
})
const handleError = () => clearError({ redirect: '/' })
</script>
