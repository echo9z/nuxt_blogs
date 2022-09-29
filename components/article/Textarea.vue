<!--
* @description 文本组件
* @fileName textarea.vue
* @author echo9z
* @date 2022/09/28 18:07:01
!-->
<template>
  <div>
    <textarea class="text" ref="textArea" v-bind:value="props.modelValue" @change="textChange" placeholder="摘要" id="" cols="30" rows="10"></textarea>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  // 双向绑定
  modelValue: {
    type: String,
    default: ''
  }
})
const emit = defineEmits(['update:modelValue', 'change'])

const textArea = ref(null)
const text = useVModel(props, 'modelValue', emit)
const textChange = () => {
  const textAreaVal = textArea.value
  // console.log(textAreaVal.value)
  // 当前修改checked的值时，默认会监听到触发父组件事件
  text.value = textAreaVal.value // emit('update:modelValue', newVal)
  // // 为父组件添加change事件处理逻辑
  emit('change', textAreaVal.value) // 将最新的文本内容
}
</script>
<style lang="scss" scoped>
.text{
  outline-color: #000;
  resize: none;
  font-size: 14px;
  width: 320px;
  height: 200px;
  padding: 10px;
  border: 1px solid #bfbfbf;
  border-radius: 5px;
}
</style>
