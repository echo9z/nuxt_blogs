<!--
* @description 跑马灯按钮
* @fileName Button.vue
* @author echo9z
* @date 2022/09/26 01:47:02
!-->
<template>
  <NuxtLink :to="path">
    <span>
      <slot />
    </span>
  </NuxtLink>
</template>

<script lang="ts" setup>
defineProps({
  path: {
    type: String,
    default: '/'
  }
})
</script>
<style lang="scss" scoped>
a {
  color: #fff;
  font-weight: 400;
  text-decoration: none;
  text-align: center;
  box-sizing: border-box;
  padding: 2px;
  border-radius: 6px;
  overflow: hidden;
  // display: block;
  // width: 80px;
  height: 32px;
  position: relative;
  overflow: hidden;
  border-radius: 15px;

  span {
    position: relative;
    z-index: 2;
    padding: 0 .875rem;
    align-items: center;
    font-size: 14px;
    align-items: center;
    background: #000;
    border-radius: 15px;
    display: flex;
    justify-content: center;
    box-sizing: border-box;
    height: 100%;
  }
}

a::before {
  /* 宽是父级几倍，比如父级width:100px，before宽:200px */
  content: "";
  width: 200%;
  height: 100%;
  position: absolute;
  background: linear-gradient(115deg, #4fcf70, #fad648, #a767e5, #12bcfe, #44ce7b);
  background-size: 50% 100%;
  top: 0;
  left: 0;
}

a:hover:before {
  animation: transformX .75s linear infinite;
}

@keyframes transformX {

  /* 鼠标进入时让，before伪元素位移50% */
  to {
    transform: translateX(-50%)
  }
}
</style>
