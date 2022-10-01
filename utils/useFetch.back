// 导入_AsyncData返回的数据类型接口
import { _AsyncData } from 'nuxt/dist/app/composables/asyncData'
import { hash } from 'ohash'

let baseUrl = 'http://127.0.0.1:18080'
// 指定后端返回的基本数据类型
// export interface ResponseConfig {
//     code: number,
//     status: number,
//     data: any,
//     msg: string
// }

const fetch = (url: string, options?: any): Promise<any> => {
  const config = useRuntimeConfig()
  const reqUrl = config.public.apiBase + url // 你的接口地址
  // 不设置key，始终拿到的都是第一个请求的值，参数一样则不会进行第二次请求
  const key = hash(JSON.stringify(options) + '_' + Math.random())
  console.log(options, key)
  // 如果需要统一加参数可以options.params.token = 'xxx'
  return new Promise((resolve, reject) => {
    useFetch(reqUrl, {
      ...options,
      key,
      // headers: {
      //   // Access a private variable (only available on the server)
      //   Authorization: `Bearer `
      // }
    }).then(({ data, error }: _AsyncData<any>) => {
      if (error.value) {
        reject(error.value)
        return
      }
      console.log(data);
      const value = data.value
      console.log(value);
      if (!value) {
        // 这里处理错你自定义的错误，例如code !== 1
        throw createError({
          statusCode: 500,
          statusMessage: reqUrl,
          message: '自己后端接口的报错信息',
        })
      } else {
        resolve(value)
      }
    }).catch((err: any) => {
      console.log(err)
      reject(err)
    })
  })
}

export default new class Http {
  get(url: string, params?: any): Promise<any> {
    return fetch(url, { method: 'get', params })
  }

  post(url: string, body?: any): Promise<any>  {
    return fetch(url, { method: 'post', body })
  }

  put(url: string, body?: any): Promise<any>  {
    return fetch(url, { method: 'put', body })
  }

  delete(url: string, body?: any): Promise<any>  {
    return fetch(url, { method: 'delete', body })
  }
}