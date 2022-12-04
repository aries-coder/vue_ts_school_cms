import { RouteRecordRaw } from 'vue-router'

const mapMenustoRoutes = (userMenus: any[]): RouteRecordRaw[] => {
  const routes: RouteRecordRaw[] = []

  const allRoutes: RouteRecordRaw[] = []
  const allFiles = import.meta.glob<RouteRecordRaw>('../router/main/**/*.ts', {
    eager: true,
    import: 'default'
  })

  for (const key in allFiles) {
    allRoutes.push(allFiles[key])
  }

  function initiaRoutes(menus: any[]) {
    for (const item of menus) {
      if (!item.children) {
        allRoutes.forEach((route) => {
          if (route.path === item.url) {
            routes.push(route)
          }
        })
      } else {
        initiaRoutes(item.children)
      }
    }
  }
  initiaRoutes(userMenus)

  return routes
}

export { mapMenustoRoutes }
