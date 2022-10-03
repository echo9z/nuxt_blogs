<template>
  <div class="error">
    <h1>{{ 404 }} 找不到该页 😱</h1>
    <div class="mt-[20px]">
      <NuxtLink class="bg-black text-white rounded-lg p-4 h-[45px] leading-[45px]" to="/" >回到首页</NuxtLink>
    </div>
    <img src="/assets/images/duck.jpeg" >
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  // 禁止使用的 layout的
  layout: 'center'
})
</script>

<style lang="scss" scoped>
  .error{
    @apply bg-white justify-center mt-[20px] text-center;
    h1 {
      @apply text-3xl;
    }
  }
</style>
