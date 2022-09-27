<!--
 * @description 默认模板
 * @fileName default.vue
 * @author echo9z
 * @date 2022/09/25 13:05:33
!-->
<template>
  <div>
    <header>
      <AppHeader />
    </header>
    <main class="flex xl:max-w-screen-xl m-auto w-full relative">
      <div class="w-[950px] md:mt-4 md:ml-2.5">
        <!-- 头部导航点击的内容 全在slot中输出 -->
        <slot />
      </div>
      <!-- 左侧作者 -->
      <AppAuthor />
    </main>
    <footer>
      <AppFooter />
    </footer>
  </div>
</template>

<script setup lang='ts'>
</script>
