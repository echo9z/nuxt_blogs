<!--
* @description 文章内容
* @fileName Content.vue
* @author echo9z
* @date 2023/02/18 21:11:50
!-->
<template>
    <div class="w-full flex" >
      <div class="pt-[18px] pb-[18px] sm:pb-[30px] px-[10px] md:px-[35px] w-full lg:w-[950px] md:mt-4 bg-white shadow-lg rounded-md">
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
          <div class="flex justify-between items-end sm:items-center mt-2 sm:flex-row flex-col text-sm sm:text-base">
            <p>
              最后编辑于：{{article.update_time}}
            </p>
            <div class="flex items-center">
              <i class="iconfont icon-tags"></i>
              <NuxtLink
                v-for="tag in article.tags" :key="tag.id"
                :to="{ path: '/search', query: { tag: tag.id, tagName: tag.name } }" class="art-tag px-1">
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
import MdEditor from 'md-editor-v3'
import 'md-editor-v3/lib/style.css'
const props = defineProps({
  article: {
    type: Object,
    default: null
  }
})

// const article = reactive({
//     title: props.artObj.title,
//     create_time: props.artObj.create_time,
//     viewCount: props.artObj.viewCount,
//     content: props.artObj.content,
//     update_time: props.artObj.update_time,
//     tags: props.artObj.tags
// })

const catalogList = ref([])
const onGetCatalog = (list: any) => {
  catalogList.value = list
}
</script>
<style lang="scss" scoped>
.art-tag:hover {
  color: #000;
  background-color: yellow;
  border-radius: 10px;
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
