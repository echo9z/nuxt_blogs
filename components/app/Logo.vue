<!--
* @description 
* @fileName Logo.vue
* @author echo9z
* @date 2022/10/02 18:34:23
!-->
<template>
  <div class="logo">
    <h1>
      <NuxtLink class="block h-[45px] w-[45px] lg:h-[60px] lg:w-[60px]" to="/">echo9z博客</NuxtLink>
    </h1>
  </div>
</template>

<style lang="scss" scoped>
.logo {
  a {
    text-indent: -9999px;
    background: url('/assets/images/logo.png') no-repeat center 2px / contain;
  }
}
</style>
