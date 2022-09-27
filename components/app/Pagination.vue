<!--
 * @description 分页组件
 * @fileName Pagination.vue
 * @author echo9z
 * @date 2022/09/27 14:41:43
!-->
<template>
  <div class="pagination flex justify-start px-[10px] py-[30px]">
    <!-- 理想化的分页组件 -->
    <a href="javascript:;" @click="changePage(-1)" :class="{ disabled: currentPage <= 1 }">上一页</a>
    <!-- 是否禁用，需要指导当前页码值是否等于1 -->
    <a href="javascript:;" v-if="currentPage >= 3" @click="currentPage = 1">1</a> <!-- 相当于首页 -->
    <span v-if="currentPage > 3">...</span>
    <a href="javascript:;" v-for="page in middlePageArr" :key="page" :class="{ active: currentPage === page }"
      @click="currentPage = page">{{ page }}</a>

    <span v-if="currentPage < 18">...</span><!-- 是否显示：需要知道选中的按钮页面是否 总页码 - 选中页页码 <= 5 -->
    <a href="javascript:;" v-if="currentPage <= 18" @click="currentPage = totalPage">{{ totalPage }}</a>
    <a href="javascript:;" @click="changePage(1)" :class="{ disabled: currentPage >= totalPages }">下一页</a>
  </div>
</template>

<script>
import { computed, defineComponent, ref } from 'vue'
export default defineComponent({
  name: 'EPagination',
  components: {},
  props: {
    // 按钮个数 比如中间显示的页面个数
    btnPage: {
      type: Number,
      default: 3
    },
    totalPage: {
      type: Number,
      default: 20
    },
    currentPages: { // 选中页码值
      type: Number,
      default: 15
    }
  },
  setup (props) {
    // 需要 按钮个数比如中间显示的页面个数，当前页码，总页数，起始页码，结束页码，中间按钮的数组
    const count = ref(props.btnPage)
    // 当前选中页码，默认是显示的第一页
    const currentPage = ref(props.currentPages)
    // 总页数
    const totalPages = ref(props.totalPage)
    // 中间按钮的数组
    // const middlePageArr = ref([])
    // 上一页 下一页
    const changePage = (step) => {
      let newPage = currentPage.value + step
      if (newPage <= 1) {
        newPage = 1
      }
      if (newPage >= totalPages.value) {
        newPage = totalPages.value
      }
      currentPage.value = newPage
    }
    const middlePageArr = computed(() => {
      let arr = []
      if (currentPage.value < 3) {
        // for (let i = 0; i < array.length + 1; i++) {
        //   arr.push = array[i + 1]
        // }
        arr = [1, 2, 3, 4]
      } else if (currentPage.value > totalPages.value - 2) { // 16
        // arr = [15, 16, 17, 18, 19, 20]
        for (let i = 0; i < 4; i++) {
          arr.unshift(totalPages.value - i)
        }
      } else if (currentPage.value >= 3 || currentPage.value <= 18) { // 处理 之间位置，选中的按钮在 5-16 页码之间
        // 10 11 12 13 14     15 16 17 18 19 20
        for (let i = 0; i < 3; i++) {
          // 15-2 13 14 15 16 17
          arr.push(currentPage.value - 1 + i)
        }
      }
      return arr
    })
    return {
      count,
      currentPage,
      totalPages,
      middlePageArr,
      changePage
    }
  }
})
</script>
<style lang='scss' scoped>
// .btnA {
//   @apply md: py-[5px] md:px-[10px];
// }
@media screen and (min-width:780px) {
  .pagination {
    >a {
      padding: 5px 10px;
      margin-right: 10px;
    }
  }
}
@media screen and (max-width:780px) {
  .pagination {
    >a {
      padding: 5px 5px;
      margin-right: 5px;
    }
  }
}

// @media (min-width: 768px)

.pagination {
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  // padding: 30px 10px;

  >a {
    display: inline-block;
    // padding: 5px 5px;
    border: 1px solid #000000;
    border-radius: 4px;
    min-width: 30px;
    text-align: center;
    &:hover {
      color: red;
    }

    &.active {
      background: black;
      color: #fff;
    }

    &.disabled {
      cursor: not-allowed;
      opacity: 0.4;

      &:hover {
        color: #333
      }
    }
  }

  >span {
    margin-right: 5px;
  }
}
</style>
