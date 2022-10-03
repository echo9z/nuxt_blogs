<!--
* @description 文章详情模板
* @fileName articleDetail.vue
* @author echo9z
* @date 2022/09/30 00:02:47
!-->
<template>
  <div>
    <AppHeader />
    <main class="flex justify-center xl:max-w-screen-xl m-auto w-full relative mb-[35px]">
      <slot />
    </main>
    <AppFooter />
  </div>
</template>

<script lang="ts" setup>

</script>
