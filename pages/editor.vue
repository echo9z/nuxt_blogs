<!--
* @description 发布页面
* @fileName editor.vue
* @author echo9z
* @date 2022/09/27 16:49:16
!-->
<template>
  <div>
    <header class="editor-header flex content-center">
      <div class="left-box" style="padding-right: 14px; cursor: pointer;"></div>
      <input placeholder="输入文章标题..." class="title-input" style="flex: 1 1 auto; height: 100%;" spellcheck="false"
        maxlength="80">
      <div class="right-box flex items-center">
        <button class="btn mx-[8px]"> 草稿箱 </button>
        <div class="publish-popup">
          <button class="btn mx-[8px]">发布</button>
        </div>
        <NuxtLink class="btn mx-[8px]" to="/">首页</NuxtLink>
      </div>
    </header>
    <!-- md文本框 -->
    <div class="main">
      <md-editor class="editor" v-model="text"/>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import MdEditor from 'md-editor-v3'
import 'md-editor-v3/lib/style.css'
definePageMeta({
  // 禁止使用的 layout的
  layout: false
})

const text = ref('Hello Editor!')
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

.main .editor {
  height: calc(100vh - 5.334rem);
}
</style>
