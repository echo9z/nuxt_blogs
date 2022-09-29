<!--
* @description 上传组件
* @fileName upload.vue
* @author echo9z
* @date 2022/09/28 15:26:31
!-->
<template>
  <div>
    <div>
      <input style="display:none" ref="postFile" @change="handleUploadImage" type="file" name="article" accept="image/png,image/jpeg" />
      <div class="imgView" @click="clickHandle">
        <div class="imgView_hover">
          <img class="add-tag" :src="src" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const emit = defineEmits(['uploadChange'])
const src = ref < string >('assets/images/add-tag.png')
const postFile = ref(null)
// 点击图片视图框
const clickHandle = async () => {
  postFile.value.click()
}
const handleUploadImage = (e) => {
  // 获取的文件 数组
  const filesArr: File[] = e.target.files
  emit('uploadChange', filesArr, (url: string) => {
    src.value = url
  })
}
</script>
<style lang="scss" scoped>
.imgView{
  position: relative;
  width: 320px;
  height: 200px;
  display: inline-block;
  vertical-align: top;
  text-align: center;
  line-height: 105px;
  background-color: #f5f5f5;
  border-radius: 4px;
  .imgView_hover {
    width: 320px;
    height: 200px;
    position: absolute;
    left: 0;
    top: 0;
    cursor: pointer;
    background: #fff;
    border: 1px dashed #bfbfbf;
    border-radius: 4px;
    .add-tag {
      max-width: 320px;
      max-height: 200px;
      color: #999;
      font-size: 24px;
      position: absolute;
      top: 50%;
      left: 50%;
      -webkit-transform: translate(-50%,-50%);
      transform: translate(-50%,-50%);
    }
  }
}
</style>
