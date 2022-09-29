<!--
* @description 点击添加变为输入
* @fileName Tags.vue
* @author echo9z
* @date 2022/09/29 15:00:09
!-->
<template>
  <div class="tag-input-warp w-[320px] h-[200px]  p-[10px]">
    <div class="tags flex flex-wrap justify-start" v-if="tags.length" >
      <TagItem class="m-[5px]" v-for="(item,i) in tags" :key="i" :name="item" />
    </div>
    <div class="m-[5px]">
      <input ref="InputRef" v-if="inputVisible"
        class="tag-input" @keyup.enter="generateTag" @blur="generateTag"
        v-model="tagValue" type="text">
      <button class="tag-btn" @click="showInput" v-else >+ New Tag</button>
    </div>
  </div>
</template>
<script lang="ts" setup>
import TagItem from './TagItem.vue'
const props = defineProps ({
  tagsArr: {
    type: Array,
    default: () => [{ id: 1, name: 'java' }]
  }
})
const tags = ref([])
const tagValue = ref('')
const InputRef = ref()

onMounted(() => {
  props.tagsArr.forEach(tag => {
    tags.value.push(tag.name)
  })
})

const inputVisible = ref < Boolean > (false) // 控制btn 与 input进行显示和隐藏
const showInput = () => {
  inputVisible.value = true
  nextTick(() => {
    InputRef.value?.focus()
  })
}

// 文本框回车 和 失去焦点
const generateTag = () => {
  // 显示 添加btn按钮
  inputVisible.value = false
  // 判定value是否合法 不能唯空
  if (tagValue.value.trim().length <= 0) {
    return
  }
  tags.value.push(tagValue.value)
  tagValue.value = ''
}

</script>
<style lang="scss" scoped>
.tag-input-warp{
  border: 1px solid #bfbfbf;
  border-radius:5px;
}
.tag-input{
  padding: 5px 11px;
  font-size: 12px;
  width: 80px;
  border-radius:1px;
  border: 1px solid;
  overflow: auto
}
.tag-btn {
  padding: 5px 11px;
  font-size: 12px;
  border-radius:5px;
  background-color:black;
  color: #fff;
}
</style>
