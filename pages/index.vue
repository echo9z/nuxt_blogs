<!--
* @description 首页
* @fileName index.vue
* @author echo9z
* @date 2022/09/25 02:53:16
!-->
<template>
  <div>
    <!-- xl:max-w-screen-xl m-auto w-full mt-4 -->
    <!-- 轮播图片 -->
    <div class="w-ful">
      <div class="relative">
        <img src="assets/images/blogs.jpg" alt="">
        <CoolFont class="cool-font xl:w-[800px]" />
      </div>
    </div>
    <!-- 文章 -->
    <div>
      <LazyArticleItem v-for="i in 5" :key="i" />
      <!-- 分页组件 -->
      <AppPagination />
    </div>
  </div>
</template>

<script lang="ts" setup>

</script>
<style lang="scss" scoped>
.cool-font {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
