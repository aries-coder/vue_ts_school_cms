import router from '@/router'
import cache from '@/utils/cache'
import { verifyToken } from '@/utils/verify_token'
import ALRequest from './request'
import { BASE_URL, TIME_OUT } from './request/config'

const alRequest = new ALRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    requestInterceptor(config) {
      const token = cache.getCache('token')

      if (token) {
        // config.headers!.Authorization = `Bearer ${token}`
        config.headers!.Authorization = `Bearer ${token}`
      }
      if (verifyToken()) {
        localStorage.clear()
        router.replace('/login')
        return window.$message.info('登陆过期')
      }
      return config
    },
    responseInterceptor(config) {
      return config.data
    },
    responseInterceptorCatch(config) {
   
      window.$message.error(config.response.data)
      return Promise.reject(new Error(config))
    }
  }
})

export default alRequest
export * from './modules/login'
export * from './modules/system'
export * from './modules/chat'
