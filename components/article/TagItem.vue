<!--
* @description tag标签
* @fileName Tag.vue
* @author echo9z
* @date 2022/09/28 19:00:53
!-->
<template>
  <span class="tag" ref="tag">
    {{name}}
    <i class="icon-cancel-circle"></i>
  </span>
</template>

<script lang="ts" setup>
import { defineProps, ref, onMounted } from 'vue'
defineEmits(['tagClick'])
const props = defineProps({
  name: {
    type: String,
    default: null
  }
})
</script>
<style lang="scss" scoped>
.tag {
  background-color: #000;
  color: #ffffff;
  font-size: 14px;
  border-radius: 5px;
  border-radius: 5px;
  padding: 2px 5px;
  position: relative;
}
i{
  color: red
}
.tag:hover .icon-cancel-circle:before {
  display: inline-block;
}
.icon-cancel-circle:before {
  display: none;
  position: absolute;
  content: '\e815';
  margin: 0;
  top: -3px;
  right: -3px;
}
</style>
