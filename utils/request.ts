import axios, { AxiosRequestConfig } from 'axios'
import { useUserStore } from '~~/composables/useUserStore'

// const url = process.env?.NEST_HOST || '127.0.0.1';
// console.log(url);
const instance = axios.create({
  // axios 的一些配置
  baseURL: 'http://127.0.0.1:18080'
  // baseURL: 'https://www.echouu.com'
  // baseURL: `http://${url}:18080`
  // timeout: 5000
})
// const userStore = useUserStore()

instance.interceptors.request.use((config: AxiosRequestConfig) => {
  // 拦截业务逻辑
  // 进行请求配置的修改
  // 在请求时，在请求头中添加token
  const { profile } = useUserStore()
  // 判断是否有token
  if (profile.token) {
    config.headers.Authorization = profile.token
    // config.headers.Authorization = `Bearer `
  }
  return config
}, err => {
  // 错误的处理
  return Promise.reject(err)
})

instance.interceptors.response.use(res => {
  return res.data
}, err => {
  // 错误的处理
  // 比如401 状态码是返回无效的token，做一些token的逻辑
  if (err.response && err.response.status === 401) { // err.response排除无响应情况
    // 处理响应码 401
    // 1.清空本地无效信息
    // 2.跳转值登录页
    // 3.跳转是需要携带参数（当前页面的路由地址）给登录，用户登录后根据携带参数跳转至原来页面
    // store.commit('user/setUser', {})
    // 在组件中的 url是’/user?a=10‘ $route.path = '/user'  $route.fullPath === user?a=10 $route当前路由的信息
    // router.currentRoute也是当前路由的信息 router.currentRoute.fullPath === user?a=10，这里是ref包装的得使用.value
    // const fullPath = encodeURIComponent(router.fullPath) // 这里为什么需要转码，原因是/user?a=10&b=5 像&符合就是一个特殊字符，转码后会出现%214%那种转码的字符比如在某些网站请求url地址
    /** encodeURIComponent 转换url编码，防止解析地址出现问题，比如等值会出现特殊字符
     * > encodeURIComponent('?a=100&b=20')
        '%3Fa%3D100%26b%3D20'
     */
    // 编程导航跳转值 login页面
    navigateTo('/login')
    // router.push({ path: '/login', query: { redirectUrl: fullPath } }) // login?redirectUrl=当前路由地址
  }
  return Promise.reject(err.response)
})

export default new class Http {
  get(url: string, params?: any): Promise<any> {
    return instance({ url, method: 'get', params })
  }

  post(url: string, data?: any): Promise<any>  {
    return instance({ url, method: 'post', data })
  }

  put(url: string, data?: any): Promise<any>  {
    return instance({ url, method: 'put', data })
  }

  delete(url: string, params?: any): Promise<any>  {
    return instance({ url, method: 'delete', params })
  }
}
