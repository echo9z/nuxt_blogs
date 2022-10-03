<!--
* @description 用户头像和 每日一言
* @fileName User.vue
* @author echo9z
* @date 2022/10/03 10:56:41
!-->
<template>
  <!-- 作者 和 头像部分  h-[200px] lg:h-[250px] -->
  <div class="flex flex-col md:p-6 justify-center bg-white rounded shadow-lg">
    <div class="flex justify-center">
      <img class="w-24 h-24 rounded-full" src="assets/images/logo.png" alt="echo9z">
    </div>
    <h2 class="text-center text-2xl">echo9z</h2>
    <div class="text-center mt-2">
      <h5>每日一言</h5>
      <p class="text-sm mt-2">
        不断将数组从中间位置划分成问题相同的子数组 —— 伴我同行
      </p>
    </div>
  </div>
</template>

<script lang="ts" setup>
// import http from '~~/utils/request'
// const talk = await http.get('https://v.api.aa1.cn/api/yiyan/index.php')
// console.log(talk);

</script>
<style lang="scss" scoped>
</style>
