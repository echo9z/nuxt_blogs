<!--
* @description 头部
* @fileName AppHeader.vue
* @author echo9z
* @date 2022/09/25 13:09:37
!-->
<template>
  <div class="app-header bg-white w-full md:px-8 h-[45px] xl:h-[80px] lg:h-[70px] md:h-[60px] sm:h-[60px] shadow text-black">
    <div class="flex md:m-none m-auto w-full h-full items-center xl:max-w-screen-xl  ">
      <!-- logo -->
      <div class="logo">
        <h1>
          <NuxtLink class="block h-[45px] w-[45px] lg:h-[60px] lg:w-[60px]" to="/">echo9z博客</NuxtLink>
        </h1>
      </div>
      <!-- 小于765显示 自定义弹出层 -->
      <SmilePopup :navLists="navList" class="block sm:hidden md:hidden pr-2 pl-2" />
      <!-- 默认是hidden隐藏，当屏幕大于768px 显示 -->
      <Nav :navLists="navList" />
      <!-- 搜索 -->
      <Search />
      <!-- 右侧 搜索 -->
      <div class=" flex justify-end">
        <!-- 右侧按按钮 -->
        <CoolButton class="hidden sm:inline-block ml-5 text-sm md:text-base" to="/editor">文章</CoolButton>
        <CoolButton class="mx-2 md:mx-5 text-sm md:text-base" to="/login">登录</CoolButton>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Nav from './app/Nav.vue';
import Search from './app/Search.vue';

const navList: string[] = ['首页', '文章', '归档', '留言', '关于', '有链']
</script>
<style lang="scss" scoped>
.app-header {
  .logo {
    a {
      text-indent: -9999px;
      background: url('/assets/images/logo.png') no-repeat center 2px / contain;
    }
  }
}
</style>
