<!--
* @description 文章列表展示页
* @fileName View.vue
* @author echo9z
* @date 2022/10/03 18:38:23
!-->
<template>
  <div>
    <div v-if="total > 0">
      <div>
        <ArticleItem @click="articleDetail(article.id)"
          v-for="article in articleList"
          :key="article.id"
          :articleItem="article" />
      </div>
      <!-- 分页组件 -->
      <ArticlePagination
        :totalPage="total"
        :pageSizes="reqParams.pageSize"
        :currentPages="reqParams.page"
        @currentChange="changePager" />
    </div>
    <div class="flex flex-col justify-center items-center mt-[30px]" v-else>
      <i class="icon-search text-gray-300 mb-[80px]">未搜索的结果</i>
      <img src="/assets/images/undefined.jpg" class="w-[460px]" alt="">
    </div>
  </div>
</template>

<script lang="ts" setup>
import { findArticleList, IFindLimit } from '~~/api/article'
import { useFormatDate } from '~~/utils/day'
const props = defineProps({
  search: {
    type: Object,
    default: () => ({})
  }
})
const reqParams = reactive < IFindLimit > ({
  page: 1, // 默认评价第一页
  pageSize: 10, // 一页显示几条
  sortField: 'update_time',
  sortMethod: 'DESC',
  category: null,
  tag: null,
  keyword: null
})

watch(() => props, () => {
  reqParams.category = props.search.category
  reqParams.tag = props.search.tag
  reqParams.keyword = props.search.keyword
}, { immediate: true, deep: true })

const articleList = ref([])
const total = ref(0)
// 评价组件初始发送 评论内容请求，筛选条件发送改变也发送请求
watch(reqParams, async () => {
  const res = await findArticleList(reqParams)
  // console.log(res.data)
  articleList.value = res.data.list
  total.value = res.data.totalNum
})

// 该事件，当分页组件发送变化时，触发changePager事件，修改 筛选参数中reqParams的page 页面，发起请求
const changePager = (newPage) => {
  reqParams.page = newPage // 监听监听的reqParams数据发送改变时发送请求
}
const articleDetail = (id) => {
  navigateTo(`/article/${id}`)
}

const res = await findArticleList(reqParams)
total.value = res.data.totalNum
articleList.value = res.data.list

</script>
<style lang="scss" scoped>
</style>
