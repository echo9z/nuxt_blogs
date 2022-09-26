<!--
 * @description 默认模板
 * @fileName default.vue
 * @author echo9z
 * @date 2022/09/25 13:05:33
!-->
<template>
  <div>
    <header>
      <AppHeader />
    </header>
    <main>
      <slot />
    </main>
    <footer>
      <AppFooter />
    </footer>
  </div>
</template>

<script setup lang='ts'>
</script>
<style scoped>
</style>
