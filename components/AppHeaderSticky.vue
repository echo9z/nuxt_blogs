<!--
* @description 导航栏吸顶组件
* @fileName AppHeaderSticky.vue
* @author echo9z
* @date 2022/10/02 18:12:49
!-->
<template>
  <div :class="{show: showSticky}" class="app-header-sticky bg-white w-full md:px-8 h-[45px] xl:h-[80px] lg:h-[70px] md:h-[60px] sm:h-[60px] shadow text-black">
    <div v-show="showSticky" class="flex md:m-none m-auto w-full h-full items-center xl:max-w-screen-xl  ">
      <!-- logo -->
      <div class="logo">
        <h1>
          <NuxtLink class="block h-[45px] w-[45px] lg:h-[60px] lg:w-[60px]" to="/">echo9z博客</NuxtLink>
        </h1>
      </div>
      <!-- 小于765显示 自定义弹出层 -->
      <SmilePopup class="block sm:hidden md:hidden pr-2 pl-2" />
      <!-- 默认是hidden隐藏，当屏幕大于768px 显示 -->
      <Nav />
      <!-- 搜索 -->
      <Search />
      <!-- 右侧按钮-->
      <HeaderButton />
    </div>
  </div>
</template>

<script lang="ts" setup>
import Nav from './app/Nav.vue';
import Search from './app/Search.vue';
import HeaderButton from './app/HeaderButton.vue';

const { y } = useWindowScroll() // 结构y轴的卷曲高度
const showSticky = computed(() => {
  return y.value >= 80 // 如果文档向上卷曲的高度大于78，添加show类样式
})
</script>
<style lang="scss" scoped>
.logo {
  a {
    text-indent: -9999px;
    background: url('/assets/images/logo.png') no-repeat center 2px / contain;
  }
}
.app-header-sticky {
  width: 100%;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 9999;
  background-color: #fff;
  border-bottom: 1px solid #e4e4e4;
  // 默认吸顶导航栏位置
  transform: translateY(-100%); // 默认位置向上移动到-80px位置
  opacity: 0; // 透明度为0，由0到1 渐变的显示吸顶
  &.show { // 用于添加show样式，显示吸顶导航
    transform: translateY(0);
    opacity: 1;
    transition: all 0.3s ease-out;
  }
}
</style>
