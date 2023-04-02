<!--
* @description 文章详情页
* @fileName [id].vue
* @author echo9z
* @date 2022/09/29 21:13:04
!-->
<template>
  <transition>
    <ArticleSkeleton v-if="!article && !article.id"  />
    <ArticleContent v-else :article="article" />
  </transition>
</template>

<script lang="ts" setup>
import { getArticleById } from '~~/api/article'
import { useFormatDate } from '~~/utils/day'
import ArticleSkeleton from '~~/components/skeleton/article-skeleton.vue'

// 覆盖的default 默认模板
definePageMeta({
  layout: 'custom'
})

const route = useRoute()
const article = reactive({
  title: '',
  create_time: '',
  viewCount: 0,
  content: '',
  update_time: '',
  tags: []
})
const res = await getArticleById(route.params.id)

if (res.status === 200) {
  article.title = res.data.title
  article.create_time = useFormatDate(res.data.create_time, 'YYYY年MM月DD日')
  article.update_time = useFormatDate(res.data.update_time, 'YYYY年MM月DD日')
  article.content = res.data.content
  article.viewCount = res.data.viewCount
  article.tags = res.data.tags

  useHead({
    titleTemplate: (productCategory) => { // 动态标题
      return productCategory
        ? `${article.title} - ${productCategory}`
        : productCategory
    }
  })
}

// import Http from '~~/utils/http'
// const res = await Http.get(`/api/articles/${route.params.id}`)
// if (res.status === 200) {
//   article.value = res.data
// }

// 视图等待数据更新，再一并渲染
// await nextTick()

</script>
<style lang="scss" scoped>
</style>
