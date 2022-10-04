<!--
* @description 分类下拉框
* @fileName Cate.vue
* @author echo9z
* @date 2022/09/29 10:34:41
!-->
<template>
  <div class="category" ref="target">
    <div class="select" :class="{active:visible}" @click="toggle">
      <!-- fullLocation没有数据，显示收货地址按钮 -->
      <i class="iconfont icon-emo-coffee"></i>
      <span v-if="!cateName" class="placeholder" >请选文章分类</span> <!-- 选择的收货地址 -->
      <span v-else class="value">{{cateName}}</span> <!-- 选择后的值 -->
    </div>
    <!-- 点击地址，显示的下拉按钮 -->
    <div class="option" v-if="visible">
      <!-- 这里的loading是通过样式设置的背景图片，但是存在一个问题，当显示下拉按钮会同时请求背景图片 和 发起获取城市json数据的请求，可能就是出现loading图片不显示效果
      比如发起获取城市json数据返回了，请求的背景图片没有返回，将图片处理完base64格式图片，即打包成字符串 -->
      <div v-if="loading" :class="{loading:loading}" ></div>
      <template v-else >
        <span class="ellipsis" v-for="item in currentList" :key="item.id"
          @click="selectCity(item)">{{item.name}}</span>
      </template>
    </div>
  </div>
</template>

<script setup lang='ts'>
import { onClickOutside } from '@vueuse/core'
import { getCategory } from '~~/api/article'
const emit = defineEmits(['change'])
defineProps({
  cateName: {
    type: String,
    default: ''
  }
})
// 控制option框的隐藏和显示
const visible = ref(false)
const allCategory = ref([]) // 所有城市数据
const loading = ref(false) // 加载是显示，骨架效果
// 打开 和 关闭函数
const open = async () => {
  visible.value = true
  loading.value = true // 在发送时将
  // 用户点击时获取城市地区数据
  const res = await getCategory().finally(() => {
    loading.value = false
  })
  allCategory.value = res.data.list
  // 在每次点击时，清空之前的选中数据，计算属性就会将window.cityData数据赋值给
  for (const key in selectResult) {
    selectResult[key] = ''
  }
}
const close = () => {
  visible.value = false
}
// 提供一个切换函数给select使用
const toggle = () => {
  visible.value ? close() : open()
}

// 实现点击组件外部元素，进行关闭操作框
const target = ref(null)
// 参数1：监听那个元素
// 参数2：点击监听外元素的外部，触发回调函数
onClickOutside(target, (event) => close())
// 通过计算属性，显示当前地区列表数据，比如点击一开始 option展示的数据是34省，当点击北京，将原来的allCityData全部替换为北京市下的区；如果点区比如平昌区，allCityData全部替换为区下的街道
const currentList = computed(() => {
  // 第一次点击，默认显示省一级的
  return allCategory.value
})
// 定义选定 的 省市区的 数据
const selectResult = reactive({
  cateId: '', // 分类id
  cateName: '' // 分类名称
})
// 当点击每个item，记录数据
const selectCity = (item) => {
  console.log(item)
  selectResult.cateId = item.id
  selectResult.cateName = item.name
  close() // 关闭选择框
  // 将选择的数据 给到 fullLocation
  // 通知父组件，修改父组件的参数
  emit('change', selectResult)
}

</script>
<style lang='scss' scoped>
.category {
  display: inline-block;
  position: relative;
  z-index: 400;
  .select {
    border: 1px solid #e4e4e4;
    height: 30px;
    padding: 0 5px;
    line-height: 28px;
    border-radius: 5px;
    cursor: pointer;
    &.active {
      background: #fff;
    }
    .placeholder {
      color: #999;
      font-size: 14px;
    }
    .value {
      color: #666;
      font-size: 14px;
    }
    i {
      font-size: 12px;
      margin-right: 10px;
    }
  }
  .option {
    width: 282px;
    border: 1px solid #e4e4e4;
    position: absolute;
    left: 0;
    top: 29px;
    background: #fff;
    min-height: 30px;
    line-height: 30px;
    display: flex;
    flex-wrap: wrap;
    padding: 10px;
    > span {
      width: 65px;
      text-align: center;
      cursor: pointer;
      border-radius: 10px;
      font-size: 14px;
      &:hover {
        background: #000;
        color: #fff;
      }
    }
    .loading { // 34个选择按钮的，loading效果
      height: 160px;
      width: 100%;
      background: url('/assets/images/load.gif') no-repeat center;
    }
  }
}
</style>
