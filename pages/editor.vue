<!--
* @description 发布页面
* @fileName editor.vue
* @author echo9z
* @date 2022/09/27 16:49:16
!-->
<template>
  <div class="relative">
    <header class="editor-header flex content-center">
      <div class="left-box" style="padding-right: 14px; cursor: pointer;"></div>
      <input v-model="article.title" placeholder="输入文章标题..." class="title-input" style="flex: 1 1 auto; height: 100%;" spellcheck="false"
        maxlength="80">
      <div class="right-box flex items-center">
        <NuxtLink class="btn mx-[8px]" to="/">首页</NuxtLink>
      </div>
    </header>

    <!-- md文本框 -->
    <div class="main editor">
      <md-editor class="editor"
        @onHtmlChanged='htmlChanged'
        @on-upload-img="onUploadImg"
        v-model="article.content"/>
    </div>

    <div class="flex my-[30px] justify-center">
      <!-- 文章的封面 + 选中的分类 + 文章的标签 -->
      <div class="mr-[24px]">
        <ArticleUpload @uploadChange="uploadChange" />
      </div>
      <div class="mr-[24px]" >
        <ArticleTextarea v-model="article.summary" @change="textAreaChange"/>
      </div>
      <div class="mr-[24px]">
        <ArticleTags :tagsArr="tagsArr" @addTag="addTag" @checkedTags="checkedTags" />
      </div>
      <!-- 选择分类 -->
      <div class="w-[320px] h-[200px]">
        <ArticleCate :cateName="cateName" @change="categoryChange" />
      </div>
    </div>

    <div class="sticky bottom-0 h-[80px] z-[666] flex justify-evenly content-center bg-white border-t-[1px] border-solid border-gray-300 ">
      <button class="btn mx-[8px] mt-[20px]"> 草稿箱 </button>
      <div class="publish-popup">
        <button class="btn mx-[8px] mt-[20px]" @click="createAricle">发布</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { uploadImg, getTags, createArticle } from '../api/article'
import MdEditor from 'md-editor-v3'
import 'md-editor-v3/lib/style.css'
definePageMeta({
  // 禁止使用的 layout的
  layout: false
})

// 提交是的表单数据
const article = reactive({
  title: '',
  content: '', // md
  contentHtml: '',
  summary: '',
  coverUrl: '',
  status: '', // 草稿 还是发布
  category: '', // 文章分类
  isRecommend: false, // 是否推荐
  tag: '' // 1,2,3
})
// md触发事件
const htmlChanged = (html) => {
  article.contentHtml = html
}
// 文章中的图片上传 在文章内容中
const onUploadImg = async (files, callback) => {
  const res = await Promise.all(
    files.map((file) => {
      console.log(file)
      // eslint-disable-next-line promise/param-names
      return new Promise((rev, rej) => {
        uploadImg(file).then((res) => {
          console.log(res)
          rev(res)
        }).catch((error) => rej(error))
      })
    })
  )

  callback(res.map((item) => {
    console.log(item.data.url)
    return item.data.url
  }))
}
// 上传文章封面
const uploadChange = async (files: File[], callback: Function) => {
  console.log(files)
  // 这里会上传图片
  const res: any = await new Promise((rev, rej) => {
    uploadImg(files[0]).then((res) => {
      rev(res)
    }).catch((error) => rej(error))
  })
  article.coverUrl = res.data.url
  callback(res.data.url)
}

const cateName = ref('')
// 选择分类change事件
const categoryChange = (category) => {
  cateName.value = category.cateName
  article.category = category.cateId
}

// 摘要处理
const textAreaChange = (textContent: string) => {
  article.summary = textContent
}

const tagsArr = ref([]) // 存放tag标签数组
const tags = await getTags()
// console.log(tags);
tagsArr.value = tags.data
// 子组件的触发事件
const addTag = (tag) => {
  tagsArr.value.push(tag)
}
// 将选中的tag数据赋值给reactive
const checkedTags = (checkedTags) => {
  console.log(checkedTags)
  // 将选中的tag数组中的id 格式化为 1,2,3,4
  let strTags = checkedTags.map(item => item.id).join(',');
  console.log(strTags)
  article.tag = strTags
}

// 最后的发表文章
const createAricle = async () => {
  article.status = 'publish'
  const res = await createArticle(article)
  console.log(res);
  navigateTo(`/article/${res.data.articleId}`)
}
</script>

<style lang="scss" scoped>
.editor-header {
  padding: 0 27px;
  height: 4rem;
  background-color: #fff;
  border-bottom: 1px solid #ddd;
  z-index: 100;
}
.title-input {
  margin: 0;
  padding: 0;
  font-size: 24px;
  font-weight: 500;
  color: #1d2129;
  border: none;
  outline: none;
}

.btn {
  height: 32px;
  padding: 2px 16px;
  font-size: 14px;
  line-height: 24px;
  border: 1px solid #1d2129;
  border-radius: 8px;
  cursor: pointer;
  color: #fff;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  background-color: #1d2129;
}
.editor {
  height: calc(100vh - 9.25rem);
}
</style>
