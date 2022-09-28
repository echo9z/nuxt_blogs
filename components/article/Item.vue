<!--
* @description 文章item
* @fileName Article.vue
* @author echo9z
* @date 2022/09/27 14:33:07
!-->
<template>
  <div class="mt-2 md:mt-4">
    <!-- md:hover:scale-[1.02] md:flex -->
    <section
      class=" flex mx-[5px] md:mx-0 min-h-[140px] rounded-xl shadow-md bg-white mb-2 cursor-pointer overflow-hidden">
      <div class="basis-1/3 pl-30 pt-[20%] bg-cover bg-center"
        data-src="https://resource.lsyboy.cn/blog/wallhaven-z83g6v.png?imageView2/1/w/317/h/144/q/80/format/webp"
        lazy="loaded"
        style="background-image: url(&quot;https://resource.lsyboy.cn/blog/wallhaven-z83g6v.png?imageView2/1/w/317/h/144/q/80/format/webp&quot;);">
      </div>
      <div class="basis-2/3 flex flex-col pl-[10px] pb-[5px] justify-around md:justify-evenly md:p-5">
        <!-- 文章的标题 -->
        <h2 class="md:text-2xl duration-150 font-bold text-[18px] title">
          JavaScript 归并排序
        </h2>
        <div class="py-1">
          <p class="text-gray-500 desc overflow-hidden overflow-ellipsis text-xs md:text-sm leading-4">
            思路
            -「分」：不断将数组从中间位置划分成问题相同的子数组-「治」：子数组长度为1时，递归结束，开始像上进行合
          </p>
        </div>
        <div class="flex text-gray-500 text-xs flex-col ">
          <div class="whitespace-nowrap px-1">
            <span>2022年03月01日</span>
          </div>
          <div class="tags">
            <NuxtLink to="/" v-for="i in [1,2,3,4,4]" :key="i" class="text-center px-1">
              前端基础
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts" setup>

</script>
<style lang="scss" scoped>

</style>
