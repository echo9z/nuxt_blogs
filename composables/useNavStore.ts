import { defineStore } from 'pinia'
import { useConstants } from './useConstants'
import { getNavPages } from '~~/api/home'
export const useNavStore = defineStore('nav', {
  // 2.使用容器中的state
  state: () => {
    return {
     list: useConstants.map(item => ({ pageName: item })) // 做个简单处理，同map返回[{name:‘美食’}]
    }
  },
  getters: {},
  actions: {
    // 修改用户信息对象，payload就是用户信息对象
    setUser (payload) {
      this.list = payload
    },
    // 获取分类函数，发起异步请求调接口
    async getList () { // 在layout中发起数据请求
      // 获取分类数据
      const res = await getNavPages()
      this.list = res.data
      // 给每个分类添加上控制二级分类显示隐藏的数据
      // data.result.forEach(top => {
      //   top.open = false // 给每个一级分类添加一个控制 二级分类显示和隐藏数据，默认隐藏
      // })
      // 修改数据
    }
  },
  persist: true
});
