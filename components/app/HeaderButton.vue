<!--
* @description 头部右侧btn
* @fileName HeaderButton.vue
* @author echo9z
* @date 2022/10/02 18:29:59
!-->
<template>
  <div class="flex justify-end">
    <!-- 右侧按按钮 -->
    <template v-if="profile.token">
      <NuxtLink class="h-[28px] leading-7 ml-[10px] hidden lg:inline-block" to="/member">
        <i class="icon-emo-laugh"></i>
        {{profile.nickname ? profile.nickname : profile.username}}
      </NuxtLink>
      <CoolButton class="editor-btn" to="/editor">写文章</CoolButton>
      <CoolButton class="login-btn" @click="logout">退出登录</CoolButton>
    </template>
    <template v-else>
      <CoolButton class="login-btn" to="/login">登录</CoolButton>
    </template>
  </div>
</template>

<script lang="ts" setup>
import { storeToRefs } from 'pinia'
const userStore = useUserStore()
const { profile } = storeToRefs(userStore)
// 退出登录
const logout = () => {
  userStore.$patch(state => {
    state.profile = {}
  })
}
</script>
<style lang="scss" scoped>
.editor-btn{
  @apply hidden sm:inline-block ml-5 text-sm md:text-base
}
.login-btn{
  @apply mx-2 md:mx-5 text-sm md:text-base
}
</style>
