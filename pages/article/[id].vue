<!--
* @description 文章详情页
* @fileName [id].vue
* @author echo9z
* @date 2022/09/29 21:13:04
!-->
<template>
  <div class="w-full flex" v-if="article">
    <div class="pt-[18px] pb-[30px] px-[10px] md:px-[35px] w-full lg:w-[950px] md:mt-4 bg-white shadow-lg rounded-md">
      <!-- 标题 -->
      <div>
        <h1 class="md:text-4xl text-xl title font-bold md:pt-5">{{article.title}}</h1>
        <div class="text-gray-400 flex space-x-5 md:mt-5 mt-2">
          <span>{{article.create_time}}</span>
          <span>阅读：{{article.viewCount}}</span>
        </div>
      </div>
      <!-- 文章内容 -->
      <md-editor
        v-model="article.content"
        @onGetCatalog="onGetCatalog"
        editorId="my-editor"
        :previewOnly="true"
      />
      <div>
        <div class="flex justify-between items-center mt-2">
          <p>
            最后编辑于：{{article.update_time}}
          </p>
          <div class="flex items-center">
            <i class="iconfont icon-tags"></i>
            <NuxtLink
              v-for="tag in article.tags" :key="tag.id"
              to="/search" class="art-tag">
              {{tag.name}}
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
    <!-- 左侧文章目录 -->
    <div class="catalog md:w-[200px] lg:w-[300px] hidden lg:block mt-4 w-full ml-2.5">
      <div class="bg-white rounded shadow-md p-[20px]">
        <p>文章目录</p>
        <ul class="pl-[20px]">
          <li class="cursor-pointer relative my-[5px]" v-for="(item,i) in catalogList" :key="i">
            <a :href="`#${item.text}`">{{item.text}}</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { getArticleById } from '~~/api/article'
import { useFormatDate } from '~~/utils/day'
import MdEditor from 'md-editor-v3'

import 'md-editor-v3/lib/style.css'
// 覆盖的default 默认模板
definePageMeta({
  layout: 'custom'
})

const route = useRoute()
const article = ref(null)
const res = await getArticleById(route.params.id)
res.data.create_time = useFormatDate(res.data.create_time, 'YYYY年MM月DD')
res.data.update_time = useFormatDate(res.data.update_time, 'YYYY年MM月DD')
article.value = res.data

useHead({
  titleTemplate: (productCategory) => { // 动态标题
    return productCategory
      ? `${res.data.title} - ${productCategory}`
      : productCategory
  }
})

const catalogList = ref([])
const onGetCatalog = (list) => {
  catalogList.value = list
}

</script>
<style lang="scss" scoped>
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
