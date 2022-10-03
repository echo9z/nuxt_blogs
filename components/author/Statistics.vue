<!--
* @description 文章分类统计
* @fileName Statistics.vue
* @author echo9z
* @date 2022/10/03 14:50:47
!-->
<template>
  <div class="mt-2 bg-white rounded-md shadow-lg md:py-2 lg:py-5">
    <ul class="flex w-full justify-around">
      <li class="w-10 text-center" v-for="(item, index) in count.data" :key="index">
        <h3 class="lg:text-lg font-bold">{{item.name}}</h3>
        <p>
          <span>{{item.count}}</span>
        </p>
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import { getCount } from '~~/api/home'
const count = ref(null)
count.value = await getCount()

</script>
<style lang="scss" scoped>
</style>
