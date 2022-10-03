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
      <div class="relative rounded-[10px] overflow-hidden">
        <img src="/assets/images/blogs.jpg" alt="">
        <CoolFont class="cool-font xl:w-[800px]" />
      </div>
    </div>
    <!-- 文章 -->
    <div>
      <ArticleView />
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
