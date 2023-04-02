<!--
* @description 头部组件搜索
* @fileName Search.vue
* @author echo9z
* @date 2022/09/26 14:08:12
!-->
<template>
  <div class="search flex-1 flex justify-center md:justify-end items-center h-full relative">
    <i class="iconfont icon-search absolute right-1 text-stone-950" @click="onSearch(keyword)"></i>
    <input class="search-btn"
      v-model="keyword"
      type="text"
      placeholder="搜一搜" @keyup.enter="onSearch(keyword)">
  </div>
</template>

<script lang="ts" setup>
const keyword = ref < string >('')
const onSearch = (searchText: string) => {
  let go = null
  const keyword = searchText.trim()
  if (keyword.length === 0 ) {
    go = { path: '/search' }
  } else {
    go = {
      path: '/search',
      query: {
        keyword
      },
    }
  }
  navigateTo(go)
}
</script>
<style lang="scss" scoped>
.search-btn{
  @apply pl-4 pr-7 box-border outline-none h-[30px] rounded-full w-full md:w-[180px] border-[1px] border-solid text-stone-950
}
</style>
