export default defineNuxtRouteMiddleware((to, from) => {
  const token = useCookie('token')
  // console.log(token.value)
  if (to.fullPath === '/editor' && !token.value ) {
    return navigateTo('/login')
  }
  if (to.fullPath === '/login' && token.value ) {
    return navigateTo('/')
  }
  // 用户访问的query参数中 存在在middleware 这抛出异常
  // if ('middleware' in to.query) {
  //   return showError('error in middleware')
  // }
})