<!--
* @description 标签组件
* @fileName Tags.vue
* @author echo9z
* @date 2022/10/03 14:52:40
!-->
<template>
  <div class=" md:w-[200px] lg:w-[300px] mt-2 bg-white rounded-md shadow-lg p-2 ">
    <div class="title">
      <h4 class="px-2.5 py-1.5">标签</h4>
    </div>
    <div class="tags flex flex-wrap justify-evenly mb-[15px]">
      <NuxtLink class="block h-7 mt-2 bg-black rounded-lg leading-7 px-[8px] text-[12px] text-white hover:text-yellow-200 hover:shadow-lg"
        v-for="tag in tagsArr" :key="tag.id"
        :to="{ path: '/search', query: { tag: tag.id, tagName: tag.name } }">
        {{tag.name}}
      </NuxtLink>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { getTags } from '~~/api/article'
const tagsArr = ref([]) // 存放tag标签数组
const tags = await getTags()
tagsArr.value = tags.data
</script>
<style lang="scss" scoped>
</style>
