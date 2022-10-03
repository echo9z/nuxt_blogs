<!--
* @description 左侧作者 文章信息
* @fileName Author.vue
* @author echo9z
* @date 2022/09/27 14:17:53
!-->
<template>
  <div class="md:w-[200px] lg:w-[300px] hidden md:block mt-4 w-full ml-2.5">
    <User />
    <!-- 文章分类统计 -->
    <Statistics />
    <!-- 标签 -->
    <Tags />
  </div>
</template>

<script lang="ts" setup>
import User from './author/User'
import Statistics from './author/Statistics'
import Tags from './author/Tags'
</script>
