<!--
* @description 文章列表展示页
* @fileName View.vue
* @author echo9z
* @date 2022/10/03 18:38:23
!-->
<template>
  <div>
    <div>
      <ArticleItem @click="articleDetail(article.id)" v-for="article in commentList" :key="article.id" :articleItem="article" />
    </div>
    <div>
      <!-- 分页组件 -->
      <AppPagination
        :totalPage="total"
        :pageSizes="reqParams.pageSize"
        :currentPages="reqParams.page"
        @currentChange="changePager" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { findArticleList } from '~~/api/article'

const reqParams = reactive({
  page: 1, // 默认评价第一页
  pageSize: 10, // 一页显示几条
  sortField: 'update_time',
  sortMethod: 'DESC'
})

const commentList = ref([])
const total = ref(0)
// 评价组件初始发送 评论内容请求，筛选条件发送改变也发送请求
watch(reqParams, () => {
  findArticleList(reqParams).then((res) => {
    // console.log(res.data)
    commentList.value = res.data.list
    total.value = res.data.total
  })
}, { immediate: true })


// 该事件，当分页组件发送变化时，触发changePager事件，修改 筛选参数中reqParams的page 页面，发起请求
const changePager = (newPage) => {
  reqParams.page = newPage // 监听监听的reqParams数据发送改变时发送请求
}
const articleDetail = (id) => {
  navigateTo(`/article/${id}`)
}

await findArticleList()
</script>
<style lang="scss" scoped>
</style>
