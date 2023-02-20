<!--
* @description 关于
* @fileName about.vue
* @author echo9z
* @date 2022/10/03 14:23:34
!-->
<template>
  <div class="pt-[20px] pb-[30px] md:pl-[100px] pl-[20px] bg-white shadow-md">
    <h2 class="text-4xl font-bold">echo9z</h2>
    <md-editor
      v-model="content"
      editorId="my-editor"
      :previewOnly="true"
    />
  </div>
</template>

<script lang="ts" setup>
import MdEditor from 'md-editor-v3'
import 'md-editor-v3/lib/style.css'
const content = useAbout()
useHead({
  titleTemplate: (title) => `关于${title}`
})
</script>
<style lang="scss" scoped>
</style>
