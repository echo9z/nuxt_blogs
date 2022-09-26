<!--
* @description 头部
* @fileName AppHeader.vue
* @author echo9z
* @date 2022/09/25 13:09:37
!-->
<template>
  <div
    class="app-header w-full md:px-8 h-[45px] xl:h-[80px] lg:h-[70px] md:h-[60px] sm:h-[60px] shadow text-black" >
    <div class="flex md:m-none m-auto w-full h-full items-center xl:max-w-screen-xl  " >
      <!-- logo -->
      <div class="logo">
        <h1>
          <NuxtLink class="block h-[45px] w-[45px] lg:h-[60px] lg:w-[60px]" to="/">echo9z博客</NuxtLink>
        </h1>
      </div>

      <!-- 小于765显示 自定义弹出层 -->
      <SmilePopup :navLists="navList" class="block sm:hidden md:hidden pr-2 pl-2" />
      <!-- 默认是hidden隐藏，当屏幕大于768px 显示 -->
      <div class="flex-2 hidden sm:flex h-full">
        <NuxtLink class="break-all ml-6 lg:ml-10 h-full  flex items-center box-border cursor-pointer"
          v-for="(item, index) in navList" :key="index"
          :class="{'lg:border-b-4 border-solid border-green-900	': index === 1}"
        >{{item}}</NuxtLink>
      </div>
      <!-- 搜索 -->
      <div class="flex-1 search flex justify-center md:justify-end items-center h-full relative">
        <i class="iconfont icon-search absolute right-2"></i>
        <input class="pl-4 box-border outline-none h-[30px] rounded-full w-full md:w-[180px] border" type="text" placeholder="搜一搜">
      </div>
      <!-- 右侧 搜索 -->
      <div class=" flex justify-end">
        <!-- 右侧按按钮 -->
        <div class="flex">
          <CoolButton class="hidden sm:inline-block ml-5 text-sm md:text-base" to="/write" >文章</CoolButton>
          <CoolButton class="mx-2 md:mx-5 text-sm md:text-base" to="/login" >登录</CoolButton>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const navList:string[] = ['首页','文章', '归档', '留言', '关于']
</script>
<style lang="scss" scoped>
.app-header{
  .logo {
    a{
      text-indent: -9999px;
      background: url('/assets/images/logo.png') no-repeat center 2px / contain;
    }
  }
}
</style>
