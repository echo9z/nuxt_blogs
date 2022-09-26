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
      <i v-if="showLayer" class="iconfont icon-emo-tongue"></i>
      <i v-else class="iconfont icon-emo-happy"></i>
    </div>
    <!-- 弹出层 -->
    <div class="layer" :class="{open:showLayer}">
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
  showLayer.value = !showLayer.value
}
</script>
<style lang="scss" scoped>
.smilePopup {
  position: relative;

  >i {
    height: 45px;
  }

  .layer {
    position: absolute;
    top: 35px;
    left: -10px;
    // width: 100%;
    background-color: #fff;
    height: 0; // 高度0
    opacity: 0; // 透明度0
    transition: all .2s .1s;
    &.open {
      // .layer.open 交集，添加显示layer弹出层
      height: 132px;
      opacity: 1;
    }

    > :before {
      content: '';
      background-color: #fff;
      width: 10px;
      height: 10px;
      border-top: 1px solid;
      border-right: 1px solid;
      transform: rotate(-45deg);
      position: absolute;
      top: -5px;
    }

    >ul {
      display: flex;
      flex-direction: column;
      align-items: center;
      // justify-items: ;
      width: 60px;
      border: 1px solid;
      border-radius: 0 0 15px 15px;

      li {
        width: 45px;
        padding: 5px;
        text-align: center;

        &:hover {
          >a {
            color: green;
            border-bottom: 1px solid red;
          }
        }
      }
    }

  }
}
</style>
