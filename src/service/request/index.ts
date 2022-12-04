import axios from 'axios'
import type { AxiosInstance } from 'axios'
import type { ALRequestConfig, ALRequestInterceptors } from './type'

class ALRequest {
  // axios请求实体
  instance: AxiosInstance
  // axios拦截
  interceptors?: ALRequestInterceptors

  constructor(config: ALRequestConfig) {
    this.instance = axios.create(config)
    this.interceptors = config.interceptors

    // 初始化请求拦截（对应实例拦截器）
    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptor,
      this.interceptors?.requestInterceptorCatch
    )
    // 初始化响应拦截（对应实例拦截器）
    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptor,
      this.interceptors?.responseInterceptorCatch
    )

    // 所有实例的拦截器
    // 请求拦截
    // this.instance.interceptors.request.use((config) => {
    //   console.log('所有实例的请求拦截器')

    //   return config
    // })
    // 响应拦截
    // this.instance.interceptors.response.use((config) => {
    //   console.log('所有实例的响应拦截器')

    //   return config
    // })
  }

  request<T = any>(config: ALRequestConfig): Promise<T> {
    // 单独请求的 config
    if (config.interceptors?.requestInterceptor) {
      config = config.interceptors.requestInterceptor(config)
    }
    return new Promise((resolve, reject) => {
      this.instance
        .request<any, T>(config)
        .then((res) => {
          resolve(res)
        })
        .catch((err) => {
          reject(err)
        })
    })
  }

  //
  get<T = any>(config: ALRequestConfig): Promise<T> {
    return this.request<T>({ ...config, method: 'GET' })
  }
  post<T = any>(config: ALRequestConfig): Promise<T> {
    return this.request<T>({ ...config, method: 'POST' })
  }
  delete<T = any>(config: ALRequestConfig): Promise<T> {
    return this.request<T>({ ...config, method: 'DELETE' })
  }
  patch<T = any>(config: ALRequestConfig): Promise<T> {
    return this.request<T>({ ...config, method: 'PATCH' })
  }
}

export default ALRequest
