<template>
  <div class="main">
    <n-layout has-sider style="width: 100%; height: 100%">
      <n-layout-sider
        width="210"
        :inverted="true"
        :show-trigger="true"
        collapse-mode="width"
        :collapsed="menuCollapsed"
        @update:collapsed="updateCollapsed"
      >
        <nav-menu />
      </n-layout-sider>
      <n-layout>
        <n-layout-header style="width: 100%; height: 50px">
          <nav-header
            :menu-collapsed="menuCollapsed"
            @change-menu-collapsed="updateCollapsed"
            @logout="logout"
            :breadcrumb-items="breadcrumbItems"
          />
        </n-layout-header>
        <n-layout-content
          style="
            background-color: #f0f2f5;
            width: 100%;
            height: calc(100% - 50px);
            padding: 20px;
          "
        >
          <n-config-provider
            :locale="zhCN"
            :date-locale="dateZhCN"
            style="width: 100%; height: 100%"
          >
            <router-view />
          </n-config-provider>
        </n-layout-content>
      </n-layout>
    </n-layout>
  </div>
</template>

<script lang="ts" setup>
import NavMenu from '@/components/nav-menu'
import NavHeader from '@/components/nav-header'
import { zhCN, dateZhCN } from 'naive-ui'

import useOtherStore from '@/store/modules/other'
import useLoginStore from '@/store/modules/login'

import { useRoute } from 'vue-router'
import { storeToRefs } from 'pinia'
import { ref, watch } from 'vue'

// store
const otherStore = useOtherStore()
const { menuCollapsed } = storeToRefs(otherStore)

const loginStore = useLoginStore()
const { userMenus } = storeToRefs(loginStore)

// router
const route = useRoute()

// ref
const breadcrumbItems = ref<string[]>([])

// method
const updateCollapsed = (key: boolean) => {
  otherStore.changeMenuCollapsed()
}
const initiaBreadcrumbItem = (Menus: any[]) => {
  Menus.forEach((menu) => {
    if (!menu.children) {
      if (menu.url === route.path) {
        breadcrumbItems.value[0] = menu.items[0]
        breadcrumbItems.value[1] = menu.items[1]
      }
    } else {
      initiaBreadcrumbItem(menu.children)
    }
  })
}
const logout = () => {
  otherStore.logout()
}

watch(
  () => route,
  () => {
    initiaBreadcrumbItem(userMenus.value)
  },
  { deep: true, immediate: true }
)
</script>

<style lang="less" scoped>
.main {
  width: 100%;
  height: 100%;
}
</style>
