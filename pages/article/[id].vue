<!--
* @description 文章详情页
* @fileName [id].vue
* @author echo9z
* @date 2022/09/29 21:13:04
!-->
<template>
  <transition>
    <ArticleContent v-if="article && article.id" :artObj="article"/>
    <ArticleSkeleton v-else />
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
const article = ref(null)
const res = await getArticleById(route.params.id)
if (res.status === 200) {
  article.value = res.data
}

// import Http from '~~/utils/http'
// const res = await Http.get(`/api/articles/${route.params.id}`)

// if (res.status === 200) {
//   article.value = res.data
// }
article.value.create_time = useFormatDate(article.value.create_time, 'YYYY年MM月DD')
article.value.update_time = useFormatDate(article.value.update_time, 'YYYY年MM月DD')

useHead({
  titleTemplate: (productCategory) => { // 动态标题
    return productCategory
      ? `${article.value.title} - ${productCategory}`
      : productCategory
  }
})

// 视图等待数据更新，再一并渲染
// await nextTick()

</script>
<style lang="scss" scoped>
</style>
