<!--
* @description 
* @fileName index.vue
* @author echo9z
* @date 2023/02/15 11:29:16
!-->
<template>
  <div class="e-skeleton" :style="{width,height}" :class="{shan:animated}">
    <!-- 1 盒子-->
    <div class="block" :style="{backgroundColor:bg}"></div>
    <!-- 2 闪效果 e-skeleton 伪元素，通过伪元素来覆盖上面盒子，盒子为灰色，伪元素为渐变的白色背景，再通过动画进行循环移动 --->
  </div>
</template>

<script lang="ts" setup>
defineProps({
  // 使用的时候需要动态设置 高度，宽度，背景颜色，是否闪下
  bg: { // 设置背景颜色
    type: String,
    default: '#efefef'
  },
  width: {
    type: String,
    default: '100px'
  },
  height: {
    type: String,
    default: '100px'
  },
  animated: { // 是否使用动画效果
    type: Boolean,
    default: false
  }
})
</script>
<style lang="scss" scoped>
.e-skeleton {
  display: inline-block;
  position: relative;
  overflow: hidden;
  vertical-align: middle;
  .block {
    width: 100%;
    height: 100%;
    border-radius: 2px;
  }
}
.shan {
  &::after { // 通过伪元素，会定位到div上
    content: "";
    position: absolute;
    animation: shan 1.5s ease 0s infinite; // 动画1.5秒执行一次，infinite循环播放动画
    top: 0;
    width: 50%;
    height: 100%;
    // 背景颜色渐变
    background: linear-gradient(
      to left,
      rgba(255, 255, 255, 0) 0,
      rgba(255, 255, 255, 0.3) 50%,
      rgba(255, 255, 255, 0) 100%
    );
    transform: skewX(-45deg); // 将伪元素进行倾斜45
  }
}
@keyframes shan {
  0% {
    left: -100%;
  }
  100% {
    left: 120%;
  }
}
</style>
