import router from '@/router'
import cache from '@/utils/cache'
import { defineStore } from 'pinia'

const useOtherStore = defineStore('other', {
  state: () => ({
    defaultExpandedKeysValue: '',
    menuCollapsed: false,
    showModal: false,
    msgInfo: [] as any[],
    defaultRoute: ''
  }),
  actions: {
    changeMsgInfo(info: object) {
      this.msgInfo = [...this.msgInfo, info]
    },
    clearMsgInfo() {
      this.msgInfo = []
    },
    changeDefaultExpandedKeys(key: string) {
      this.defaultExpandedKeysValue = key
    },
    changeDefaultRoute(route: string) {
      this.defaultRoute = route
    },
    changeMenuCollapsed() {
      this.menuCollapsed = !this.menuCollapsed
    },
    logout(str: string = '退出成功') {
      cache.clearCache()
      router.replace('/login')
      window.$message.info(str)
    },
    changeShowModal() {
      this.showModal = !this.showModal
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

export default useOtherStore
