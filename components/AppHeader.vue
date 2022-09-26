<!--
* @description 头部
* @fileName AppHeader.vue
* @author echo9z
* @date 2022/09/25 13:09:37
!-->
<template>
  <div
    class="app-header w-full px-8 lg:h-[65px] xl:h-[80px]   shadow text-black" style="background-color:pink;">
    <div class="flex m-auto w-full h-full items-center xl:max-w-screen-xl  " style="background-color:skyblue;">
      <!-- logo -->
      <div class="logo w-[80px]">
        <h1>
          <NuxtLink class="block h-[60px] w-full" to="/">echo9z博客</NuxtLink>
        </h1>
      </div>
      <SmilePopup :navLists="[1,5]" class="pr-5 pl-2" />
      <!-- 默认是hidden隐藏，当屏幕大于768px 显示 -->
      <div class="flex-1 hidden md:flex h-full">
        <NuxtLink class="break-all lg:ml-10 ml-8 h-full text-lg flex items-center box-border"
          v-for="(item, index) in navList" :key="index"
          :class="{'lg:border-b-4 border-solid border-green-900	': index === 1}"
        >{{item}}</NuxtLink>
      </div>
      <div class="flex">
        <!-- 搜索 -->
        <div class="search flex items-center">
          <input type="text" placeholder="搜一搜">
        </div>
        <!-- 右侧按按钮 -->
        <div class="flex">
          <CoolButton class="hidden md:inline-block ml-5" to="/write" >写文章</CoolButton>
          <CoolButton class="mx-5" to="/login" >登录</CoolButton>
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
