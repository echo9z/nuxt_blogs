<!--
* @description 点击移动端下的弹出层
* @fileName Popup.vue
* @author echo9z
* @date 2022/09/25 21:08:41
!-->
<template>
  <div class="smilePopup">
    <!-- 汉堡按钮 -->
    <div @click="clickHandler">
      <i class="iconfont icon-emo-happy"></i>
    </div>
    <!-- 弹出层 -->
    <div class="layer" :class="{a:showLayer}">
      <ul>
        <li v-for="item in navLists" :key="item">{{item}}</li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
defineProps({
  navLists: {
    type: Array,
    default: () => []
  }
})
const showLayer = ref(false)
const clickHandler = () => {

}
</script>
<style lang="scss" scoped>
.smilePopup {
  position: relative;
  > i {}
  .layer {
    position: absolute;
    width: 100%;
  }
}
</style>
