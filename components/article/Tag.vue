<!--
* @description tag标签
* @fileName Tag.vue
* @author echo9z
* @date 2022/09/28 19:00:53
!-->
<template>
  <div>
    <span class="tag" v-bind="props" ref="tag">{{name}}</span>
  </div>
</template>

<script lang="ts" setup>
import { defineProps, ref, onMounted } from 'vue'
const props = defineProps({
  name: {
    type: String,
    default: null
  }
})

const tag = ref(null)
onMounted(() => {
  console.log('props==', props)
  console.log('tag==', tag.value)
  setName()
})
const setName = () => {
  tag.value.innerHTML = props.name
}
</script>
<style lang="scss" scoped>
.tag {
  background-color: #000;
  color: #ffffff;
  font-size: 0.3rem;
  border-radius: 5px;
  padding: 0 0.1rem;
}
</style>
