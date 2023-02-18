<!--
* @description 文章骨架
* @fileName article-skeleton.vue
* @author echo9z
* @date 2023/02/15 12:58:08
!-->
<template>
  <div class="w-full flex">
    <div class="pt-[18px] pb-[30px] px-[10px] md:px-[35px] w-full lg:w-[950px] md:mt-4 bg-white shadow-lg rounded-md">
      <!-- 标题 -->
      <div>
        <Skeleton bg="#e4e4e4" width="60%" height="48px" :bg="'rgba(255,255,255, .2)'" animated />
        <div class="text-gray-400 flex space-x-5 md:mt-5 mt-2">
          <Skeleton bg="#e4e4e4" width="120px" height="20px" animated />
          <Skeleton bg="#e4e4e4" width="64px" height="20px" animated />
        </div>
      </div>

      <!-- 文章内容 -->
      <div class="md:mt-4 mt-2">
        <Skeleton v-for="index in 10" :key="index"
          class="md:mt-4 mt-2"
          bg="#e4e4e4" width="100%" height="24px" animated />
      </div>

      <!-- 文章标签 -->
      <div class="flex justify-between items-center mt-4">
        <Skeleton bg="#e4e4e4" width="200px" height="20px" animated />
        <div class="flex items-center space-x-2">
          <i class="iconfont icon-tags"></i>
          <Skeleton v-for="index in 3" :key="index" bg="#e4e4e4" width="36px" height="16px" animated />
        </div>
      </div>
    </div>

    <!-- 左侧文章目录 -->
    <div class="catalog md:w-[200px] lg:w-[300px] hidden lg:block mt-4 w-full ml-2.5">
      <div class="bg-white rounded shadow-md p-[20px]">
        <Skeleton bg="#e4e4e4" width="60%" height="18px" animated />
        <Skeleton class="md:mt-3" v-for="index in 4" :key="index" bg="#e4e4e4" width="100%" height="18px" animated />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
</script>
<style lang='scss' scoped>
.art {
  padding: 0 45px 35px;
}
.catalog {
  ul li {
    text-overflow: ellipsis;
    white-space: nowrap;/*1.禁止自动换行在一行内显示*/
    overflow: hidden; /* 2.超出部分进行隐藏 */
    a {
      font-size: 14px;
    }
  }
  li a::before{
    content: "";
    position: absolute;
    top: 50%;
    left: -15px;
    margin-top: -2px;
    width: 4px;
    height: 4px;
    background-color: currentColor;
    border-radius: 50%;
  }
}
</style>
