// 导入_AsyncData返回的数据类型接口
import { hash } from 'ohash'
import { useUserStore } from '~~/composables/useUserStore'

// 指定后端返回的基本数据类型
export interface ResponseOption < T > {
    status?: number,
    data?: T,
    message?: string,
    timestamp?: string,
}

/**
 * api请求封装
 * @param { String } url 请求地址
 * @param { Object } options useFtech第二个参数
 * @param { Object } headers 自定义header头, 单独设置headers区分请求参数，也好设置类型
 */
const fetch = (url: string, options?: any, headers?: any): Promise<any> => {
  const config = useRuntimeConfig()
  const reqUrl = config.public.BASE_API_HOST + url // 你的接口地址

  // 不设置key，始终拿到的都是第一个请求的值，参数一样则不会进行第二次请求
  const key = hash(JSON.stringify(options) + url)
  // console.log(options, key, reqUrl)

  // 如果需要统一加参数可以 通过headers
  const { profile } = useUserStore()
  const customHeaders = { Authorization: profile.token, ...headers }

  return new Promise((resolve, reject) => {
    useFetch(reqUrl, {
      ...options, key, headers: customHeaders
    }).then(({ data, error }) => {
      if (error.value) {
        reject(error.value)
        return
      }

      const value = data.value // 响应的结果
      if (!value) {
        // 这里处理错你自定义的错误，例如code !== 1
        throw createError({
          statusCode: 500,
          statusMessage: reqUrl,
          message: '自己后端接口的报错信息',
        })
      } else { // 成功返回结果
        resolve(value)
      }
    }).catch((err: any) => {
      console.log(err)
      reject(err)
    })
  })
}

export default new class Http {
  get(url: string, params?: any, headers?: any): Promise<any> {
    return fetch(url, { method: 'get', params }, headers)
  }

  post(url: string, body?: any, headers?: any): Promise<any>  {
    return fetch(url, { method: 'post', body }, headers)
  }

  put(url: string, body?: any, headers?: any): Promise<any>  {
    return fetch(url, { method: 'put', body }, headers)
  }

  delete(url: string, body?: any, headers?: any): Promise<any>  {
    return fetch(url, { method: 'delete', body }, headers)
  }
}