<!--
* @description header中间件部分
* @fileName Nav.vue
* @author echo9z
* @date 2022/09/26 14:01:55
!-->
<template>
  <div class="flex-2 hidden sm:flex h-full mr-1" >
    <ul class="flex items-center">
      <li class="nav-style">
        <NuxtLink class="home" to='/' >首页</NuxtLink>
      </li>
      <li class="nav-style"
        v-for="(item,i) in navList" :key="i">
        <NuxtLink :to="item.path">
          {{item.pageName}}
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
// const navList: string[] = ['文章', '归档', '留言', '关于', '有链']
const navStore = useNavStore()
navStore.getList()

const navList = computed(() => {
  return navStore.list
})
</script>
<style lang="scss" scoped>
.nav-style{
  @apply break-all ml-4 lg:ml-10 h-full flex items-center box-border cursor-pointer;
}
</style>
