<!--
* @description 输入文字特效
* @fileName Font.vue
* @author echo9z
* @date 2022/09/26 15:25:22
!-->
<template>
  <div>
    <p class="gradient-text text-center text-3xl md:text-4xl lg:text-6xl">
      <span ref="text"></span>
    </p>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useAppend } from '../../composables/useAppend'
const props = defineProps({
  texts: {
    type: String,
    default: 'Hello, 欢迎来到Echo9z的个人博客!',
  }
})
const text = ref(null)
// const con = ''
const appent = useAppend()
onMounted(async () => {
  // console.log(text.value)
  await appent(text.value, props.texts)
})
</script>
<style lang="scss" scoped>
.gradient-text {
  background-image: linear-gradient(90deg, #f66, #f90);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-animation: hue 5s linear infinite;
  animation: hue 5s linear infinite;
  -webkit-text-fill-color: transparent;
}

// p {
//   display: inline-block;
//   line-height: 100px;
// }

@keyframes hue {
  from {
    filter: hue-rotate(0);
  }

  to {
    filter: hue-rotate(-1turn);
  }
}
</style>
