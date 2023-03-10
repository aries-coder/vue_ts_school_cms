import { createRouter, createWebHashHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import cache from '@/utils/cache'
import useOtherStore from '@/store/modules/other'
import useLoginStore from '@/store/modules/login'

const listDetail = () => import('@/views/main/story/list-detail/index.vue')

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/main'
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/index.vue')
  },
  {
    path: '/main',
    name: 'main',
    component: () => import('@/views/main/index.vue'),
    children: [
      {
        path: '/main/story/list/detail',
        name: 'list_detail',
        component: listDetail
      }
    ]
  }
]

const router = createRouter({
  routes,
  history: createWebHashHistory()
})

router.beforeEach((route) => {
  if (route.path !== '/login') {
    const token = cache.getCache('token')
    if (!token) {
      router.replace('/login')
    } else {
      const otherStore = useOtherStore()
      const loginStore = useLoginStore()

      initiaDefaultExpandedKey(loginStore.userMenus)

      function initiaDefaultExpandedKey(menus: any[]) {
        for (const menu of menus) {
          if (!menu.children) {
            if (menu.url === route.path) {
              otherStore.changeDefaultExpandedKeys(menu.items[1])
            }
          } else {
            initiaDefaultExpandedKey(menu.children)
          }
        }
      }
    }
  }
  if (route.path === '/main') {
    const otherStore = useOtherStore()
    const loginStore = useLoginStore()

    initiaDefaultRoute(
      loginStore.userMenus,
      otherStore.defaultExpandedKeysValue
    )
    function initiaDefaultRoute(menus: any[], key: string) {
      for (const menu of menus) {
        if (!menu.children) {
          if (menu.name === key) {
            router.replace(menu.url)
          }
        } else {
          initiaDefaultRoute(menu.children, otherStore.defaultExpandedKeysValue)
        }
      }
    }
  }
})

export default router
