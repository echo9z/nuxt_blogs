<!--
* @description 添加tag镖旗
* @fileName AddTag.vue
* @author echo9z
* @date 2022/10/06 13:43:41
!-->
<template>
  <div class="m-[5px]">
    <input ref="InputRef" v-if="inputVisible"
      class="tag-input" @blur="generate"
      v-model="tagValue" type="text">
    <button class="tag-btn" @click="showInput" v-else >+ New {{newCate}}</button>
  </div>
</template>

<script lang="ts" setup>
import { addCategory } from '~~/api/article'
const emit = defineEmits(['addTag'])
defineProps({
  newCate: {
    type: String,
    default: 'Cate'
  }
})
const tagValue = ref('')
const InputRef = ref() // input 文本dom对象

const inputVisible = ref < Boolean > (false) // 控制btn 与 input进行显示和隐藏
const showInput = () => {
  inputVisible.value = true
  nextTick(() => {
    InputRef.value?.focus()
  })
}

const generate = async () => {
  // 显示 添加btn按钮
  inputVisible.value = false
  // 判定value是否合法 不能唯空
  if (tagValue.value.trim().length <= 0) {
    return
  }
  // 发起添加tag标签数据
  const res = await addCategory({ name: tagValue.value })
  emit('addTag', res.data)
  tagValue.value = ''
}

</script>
<style lang="scss" scoped>
.tag-input{
  padding: 5px 11px;
  font-size: 12px;
  width: 80px;
  border-radius: 5px;
  border: 1px solid;
  overflow: auto;
  outline: none;
  height: 100%;
}
.tag-btn {
  padding: 5px 11px;
  font-size: 12px;
  border-radius:5px;
  background-color:black;
  color: #fff;
}
</style>
