import {
  accountLoginRequest,
  requestUserInfo,
  userMenuInfoRequest
} from '@/service'
import { defineStore } from 'pinia'
import { AccountKey } from '@/service'
import cache from '@/utils/cache'
import router from '@/router'
import { mapMenustoRoutes } from '@/utils/map-menus'
import { initiaDateNow } from '@/utils/verify_token'
import useOtherStore from '../other'

const useLoginStore = defineStore('login', {
  state: () => ({
    token: '',
    id: 0,
    userInfo: {} as any,
    userMenus: [] as any[],
    accountKey: '' as AccountKey
  }),
  actions: {
    async accountLoginRequestAction(loginData: object, accountKey: AccountKey) {
      // 登录请求
      const loginResult = await accountLoginRequest(loginData, accountKey)

      this.token = loginResult.token
      this.id = loginResult.id
      cache.setCache('token', this.token)

      // 请求userInfo
      const userInfo = await requestUserInfo(accountKey, this.id)
      this.userInfo = userInfo
      this.accountKey = accountKey

      // 请求菜单menu
      this.userMenus = await userMenuInfoRequest(accountKey)

      // // 动态添加路由
      const routes = mapMenustoRoutes(this.userMenus)
      routes.forEach((route) => {
        router.addRoute('main', route)
      })

      const otherStore = useOtherStore()

      otherStore.changeDefaultExpandedKeys(this.userMenus[0].children[0].name)
      router.replace(this.userMenus[0].children[0].url)
      window.$message.success('登陆成功')

      // 初始化验证token
      initiaDateNow()
    },
    loadLocalRouter() {
      const routes = mapMenustoRoutes(this.userMenus)
      routes.forEach((route) => {
        router.addRoute('main', route)
      })
    }
  },
  persist: {
    enabled: true,
    strategies: [
      {
        storage: localStorage
      }
    ]
  }
})

export default useLoginStore
