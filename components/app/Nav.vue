<!--
* @description header中间件部分
* @fileName Nav.vue
* @author echo9z
* @date 2022/09/26 14:01:55
!-->
<template>
  <div class="flex-2 hidden sm:flex h-full mr-1" >
    <NuxtLink class="break-all ml-4 lg:ml-10 h-full  flex items-center box-border cursor-pointer"
      v-for="(item, index) in navLists" :key="index"
      :class="{'lg:border-b-4 border-solid border-green-900': index === 1}">{{item}}</NuxtLink>
  </div>
</template>

<script lang="ts" setup>
defineProps({
  navLists: {
    type: Array,
    default: () => []
  }
})
</script>
<style lang="scss" scoped>

</style>
