import type { AxiosRequestConfig, AxiosResponse } from 'axios'

// 定义请求和响应拦截类型接口
export interface ALRequestInterceptors<T = AxiosResponse> {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorCatch?: (error: any) => any
  responseInterceptor?: (config: T) => T
  responseInterceptorCatch?: (config: any) => any
}

// 定义 axios 实例类型接口
export interface ALRequestConfig extends AxiosRequestConfig {
  interceptors?: ALRequestInterceptors
}
