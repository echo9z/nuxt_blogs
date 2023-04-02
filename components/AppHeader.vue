<!--
* @description 头部
* @fileName AppHeader.vue
* @author echo9z
* @date 2022/09/25 13:09:37
!-->
<template>
  <header class="app-header bg-black text-white w-full md:px-8 h-[45px] xl:h-[80px] lg:h-[70px] md:h-[60px] sm:h-[60px] shadow ">
    <div class="flex md:m-none m-auto w-full h-full items-center xl:max-w-screen-xl ">
      <!-- logo -->
      <Logo />
      <!-- 小于765显示 自定义弹出层 -->
      <SmilePopup class="block sm:hidden md:hidden pr-2 pl-2" />
      <!-- 默认是hidden隐藏，当屏幕大于768px 显示 -->
      <Nav />
      <!-- 搜索 -->
      <Search />
      <!-- 右侧 搜索 -->
      <HeaderButton />
    </div>
  </header>
</template>

<script lang="ts" setup>
import Nav from './app/Nav.vue';
import Search from './app/Search.vue';
import HeaderButton from './app/HeaderButton.vue';
import Logo from './app/Logo.vue';

</script>
