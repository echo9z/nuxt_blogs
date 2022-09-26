export default defineNuxtRouteMiddleware((to) => {
  // 用户访问的query参数中 存在在middleware 这抛出异常
  // if ('middleware' in to.query) {
  //   return showError('error in middleware')
  // }
})