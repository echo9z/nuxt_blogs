<!--
* @description 搜索页
* @fileName search.vue
* @author echo9z
* @date 2022/10/02 18:47:37
!-->
<template>
  <div>
    <!-- 筛选 -->
    <div class="box-card p-[10px]">
      <div class="flex md:space-x-5 space-x-3">
        <h1 class="text-gray-500 whitespace-nowrap leading-[32px]">
          分类：
        </h1>
        <div class="cate center">
          <ul class="flex flex-wrap">
            <li class="li-style" :class="{active: search.category == null}" 
              @click="cateHandler(null)" >全部</li>
            <li class="li-style" :class="{active: search.category == cate.id}"
              v-for="cate in catesList" :key="cate.id"
              @click="cateHandler(cate)">
              <NuxtLink>
                {{cate.name}}
              </NuxtLink>
            </li>
          </ul>
        </div>
      </div>

      <div class="mt-3 flex md:space-x-5 space-x-3">
        <h1 class="text-gray-500 whitespace-nowrap leading-[32px]">
          标签：
        </h1>
        <div class="tag center">
          <ul class="flex flex-wrap">
            <li class="li-style" :class="{active: search.tag == null}"
              @click="tagHandler(null)" >
              全部
            </li>
            <li class="li-style" :class="{active: search.tag == tag.id}"
              v-for="tag in tagsArr" :key="tag.id"
              @click="tagHandler(tag)"
            >
              <NuxtLink>
                {{tag.name}}
              </NuxtLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!-- 筛选 -->
    <!-- 搜索结果文章 -->
    <div>
      <ArticleView :search="search"  />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { getTags, getCategory } from '~~/api/article'
// 获取tag标签数组
const tagsArr = ref([])
const tags = await getTags()
tagsArr.value = tags.data

const route = useRoute()
// 获取分类数据
const catesList = ref([])
const cates = await getCategory()
catesList.value = cates.data.list

const search = reactive({
  keyword: null,
  category: null,
  tag: null,
  cateName: null, // 分类名
  tagName: null // 标签名
})

watch(() => route.query, (query: string) => {
  search.keyword = query?.keyword || null
  search.tag = query?.tag || null
  search.tagName = query?.tagName || null
  
  search.category = query?.category || null
  search.cateName = query?.cateName || null
  console.log(search);
}, { immediate: true })

const cateHandler = (cate) => {
  search.category = cate ? cate.id : null
  search.cateName = cate ? cate.name : null

  navigateTo({
    path: '/search',
    query: { category: search.category , cateName: search.cateName,
      tag: search.tag, tagName: search.tagName }
  })
}

const tagHandler = (tag) => {
  search.tag = tag ? tag.id : null
  search.tagName = tag ? tag.name : null

  navigateTo({
    path: '/search',
    query: { tag: search.tag, tagName: search.tagName,
      category: search.category, cateName: search.cateName }
  })
}

</script>
<style lang="scss" scoped>
.li-style {
  @apply cursor-pointer md:hover:text-white md:hover:bg-black px-2 py-1 mr-3 rounded text-[14px]
}
.center {
  @apply flex content-center
}
.active {
  @apply bg-black text-white
}
</style>
