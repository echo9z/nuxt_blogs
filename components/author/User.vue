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
      <img class="w-24 h-24 rounded-full" src="/assets/images/logo.png" alt="echo9z">
    </div>
    <h2 class="text-center text-2xl">echo9z</h2>
    <div class="text-center mt-2">
      <h5>ToDay · SayHi</h5>
      <img class="mt-2" src="https://readme-typing-svg.demolab.com?font=Fira+Code&pause=1000&width=435&color=000&lines=console.log(%22Hello%2C%20World%22);console.log(%22祝您变得更强!%22)&center=true&size=27" alt="Typing SVG" />
      <p class="text-sm mt" v-if="SayHi.uuid">
        {{ SayHi.hitokoto }} —— {{ SayHi.creator }}
      </p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { getSayHi } from '~~/api/home'
const SayHi = reactive({
  uuid: '',
  hitokoto: '',
  creator: ''
})
getSayHi().then((res) => {
  const { data } = res
  if (res.status === 200) {
    SayHi.uuid = data.uuid
    SayHi.hitokoto = data.hitokoto
    SayHi.creator = data.creator
  }
})

</script>
<style lang="scss" scoped>
</style>
