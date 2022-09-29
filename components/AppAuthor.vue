<!--
* @description 左侧作者 文章信息
* @fileName Author.vue
* @author echo9z
* @date 2022/09/27 14:17:53
!-->
<template>
  <div class="md:w-[200px] lg:w-[300px] hidden md:block mt-4 w-full ml-2.5">
    <!-- 作者 和 头像部分  h-[200px] lg:h-[250px] -->
    <div class="flex flex-col md:p-6 justify-center bg-white rounded shadow-lg">
      <div class="flex justify-center">
        <img class="w-24 h-24 rounded-full" src="assets/images/logo.png" alt="echo9z">
      </div>
      <h2 class="text-center text-2xl">echo9z</h2>
      <div class="text-center mt-2">
        <h5>每日一言</h5>
        <p class="text-sm mt-2">
          不断将数组从中间位置划分成问题相同的子数组 —— 伴我同行</p>
      </div>
    </div>
    <!-- 文章分类统计 -->
    <div class="mt-2 bg-white rounded-md shadow-lg md:py-2 lg:py-5">
      <ul class="flex w-full justify-around">
        <li class="w-10 text-center" v-for="i in [1,2,3]" :key="i">
          <h3 class="lg:text-lg font-bold">标签</h3>
          <p>
            <span>12</span>
          </p>
        </li>
      </ul>
    </div>

    <!-- 标签 -->
    <div class=" md:w-[200px] lg:w-[300px] mt-2 bg-white rounded-md shadow-lg p-2 ">
      <div class="title">
        <h4 class="px-2.5 py-1.5">标签</h4>
      </div>
      <div class="tags flex flex-wrap justify-around">
        <NuxtLink class="block h-7 mt-2 bg-black rounded-full leading-7 px-[8px] text-[12px] text-white hover:text-yellow-200 hover:shadow-lg"
          v-for="i in [1,2,3,5,6,5,5]" :key="i">
          JavaScript
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>

</script>
