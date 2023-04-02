<!--
* @description 点击移动端下的弹出层
* @fileName Popup.vue
* @author echo9z
* @date 2022/09/25 21:08:41
!-->
<template>
  <div class="smilePopup" ref="popup">
    <!-- 汉堡按钮 -->
    <div @click="clickHandler">
      <i v-if="showLayer" class="iconfont icon-emo-tongue"></i>
      <i v-else class="iconfont icon-emo-happy"></i>
    </div>
    <!-- 弹出层 -->
    <div class="layer shadow text-sm sm:text-base" :class="{open:showLayer}" >
      <ul>
        <li>
          <NuxtLink class="home" to='/' @click="showLayer = false">首页</NuxtLink>
        </li>
        <li v-for="(item, index) in navList" :key="item.id" >
          <NuxtLink :to="item.path" @click="showLayer = false">
            {{item.pageName}}
          </NuxtLink>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { onClickOutside } from '@vueuse/core'
const showLayer = ref(false)
const clickHandler = () => {
  showLayer.value = !showLayer.value
}
const navStore = useNavStore()

const navList = computed(() => {
  return navStore.list
})

// 实现点击组件外部元素，进行关闭操作框
const popup = ref(null)
// 参数1：监听那个元素
// 参数2：点击监听外元素的外部，触发回调函数
onClickOutside(popup, (event) => { showLayer.value = false })
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
    height: 0; // 高度0
    // opacity: 0; // 透明度0
    display: none;
    transition: all .5s .1s;
    z-index: 100;
    &.open {
      // .layer.open 交集，添加显示layer弹出层
      height: 100%;
      // opacity: 1;
      display: block;
    }

    > :before {
      content: '';
      background-color: #000;
      width: 10px;
      height: 10px;
      border-top: 1px solid #857f7f;;
      border-right: 1px solid;
      transform: rotate(-45deg);
      position: absolute;
      top: -5px;
    }

    >ul {
      display: flex;
      flex-direction: column;
      align-items: center;
      background-color: #000;
      // justify-items: ;
      width: 60px;
      // border: 1px solid;
      border-radius: 0 0 15px 15px;

      li {
        width: 45px;
        padding: 5px;
        text-align: center;

        &:hover {
          >a {
            color: yellow;
          }
        }
      }
    }
  }
}
</style>
