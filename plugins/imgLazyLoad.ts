/**
 * 图片懒加载插件
 */
import VueLazyLoad from 'vue3-lazyload'
import errorImg from '~~/assets/images/error.jpg'
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(VueLazyLoad, {
    error: errorImg
  })
})
