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
      class="flex mx-[5px] md:mx-0 min-h-[140px] rounded-md shadow-md bg-white mb-2 cursor-pointer overflow-hidden">
      <div class="basis-1/3 pl-30 pt-[20%] bg-cover bg-center"
        v-lazy:background-image="articleItem.coverUrl"
        >
      </div>
      <div class="basis-2/3 flex flex-col pl-[10px] pb-[5px] justify-around md:justify-evenly md:p-5">
        <!-- 文章的标题 -->
        <h2 class="md:text-2xl duration-150 font-bold text-[18px] title">
          {{articleItem.title}}
        </h2>
        <div class="py-1">
          <p class="text-gray-500 desc overflow-hidden overflow-ellipsis text-xs md:text-sm leading-4">
            {{articleItem.summary}}
          </p>
        </div>
        <div class="flex text-gray-500 text-xs flex-col ">
          <div class="whitespace-nowrap px-1">
            <span>{{useFormatDate(articleItem.publishTime, 'YYYY年MM月DD')}}</span>
          </div>
          <div class="tags mt-[5px]">
            <NuxtLink 
              v-for="tag in articleItem.tags"
              :key="tag.id"
              :to="{ path: '/search', query: { tag: tag.id, tagName: tag.name } }"
              class="text-center px-1">
              {{tag.name}}
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts" setup>
import { useFormatDate } from '~~/utils/day'

const props = defineProps({
  articleItem: {
    type: Object,
    default: () => {}
  }
})

</script>
<style lang="scss" scoped>
.title:hover{
  text-decoration: underline;
}
.felx-4{
  flex-basis: 40%
}
.felx-6{
  flex-basis: 60%
}
</style>
