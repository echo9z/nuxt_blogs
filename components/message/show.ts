import { createVNode, render } from 'vue'
import EMessage from './index.vue'

export default ({ type, text }) => {
  let timer = null
  // 准备一个容器
  const div = document.createElement('div') || null
  div.setAttribute('class', 'message-container') // 加这个class 就知道是消息提示组件
  // 将装载message组件的div追加到body中
  document.body.appendChild(div)
  // 渲染组件
  // 1.导入消息提示组件
  // 2.将消息提示组件编译为虚拟节点(dom节点)，vue提供一个函数 createVNode 和 vue3中 h函数功能一样
  const vnode = createVNode(EMessage, { type, text })// 等价于 <EMessage type='type' text='text' />
  // console.log(vnode)
  // 3.准备一个转载消息提示组件的DOM容器, 使用原生生成dom元素
  // 4.将虚拟节点渲染在容器中 h 函数就是reader函数
  // render(虚拟节点,DOM容器)
  render(vnode, div)

  // 通过定时器清空 移出DOM容器内容
  clearTimeout(timer)
  timer = setTimeout(() => {
    render(null, div) // 将空对象 渲染到div容器中
  }, 3000)
}
