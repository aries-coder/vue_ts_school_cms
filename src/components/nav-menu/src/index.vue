<template>
  <div class="nav-menu">
    <img src="@/assets/images/logo3.png" alt="" class="logo" />
    <n-menu
      :inverted="true"
      :collapsed-icon-size="22"
      :options="menuOptions"
      :value="defaultExpandedKeysValue"
    />
  </div>
</template>

<script lang="ts" setup>
import { Component, h } from 'vue'
import { MenuOption, NIcon } from 'naive-ui'
import useLoginStore from '@/store/modules/login/index'
import useOtherStore from '@/store/modules/other/index'
import { storeToRefs } from 'pinia'
import { RouterLink } from 'vue-router'
import { SettingsSuggestOutlined, BoyOutlined, ChatFilled } from "@vicons/material"

const icons = [SettingsSuggestOutlined, BoyOutlined, ChatFilled]


// store
const loginStore = useLoginStore()
const otherStore = useOtherStore()
const { userMenus } = storeToRefs(loginStore)

// menu
const menuOptions: MenuOption[] = initiaMenus(userMenus.value)
const { defaultExpandedKeysValue } = storeToRefs(otherStore)

// method
function renderIcon(icon: Component) {
  return () => h(NIcon, null, { default: () => h(icon) })
}

function initiaMenus(userMenus: any[]): MenuOption[] {
  const menuOptions: MenuOption[] = []

  userMenus.forEach((menu, index) => {
    const propMenu: MenuOption = {
      label: menu.name,
      key: menu.name,
      icon: renderIcon(icons[index]),
      children: []
    }

    if (menu.children) {
      initiaMenuChildren(menu.children)
    }

    function initiaMenuChildren(menus: any[]) {
      menus.forEach((menu) => {
        propMenu.children!.push({
          label: () =>
            h(
              RouterLink,
              {
                to: menu.url
              },
              { default: () => menu.name }
            ),
          key: menu.name
        })
      })
    }

    menuOptions.push(propMenu)
  })

  return menuOptions
}
</script>

<style lang="less" scoped>
.nav-menu {
  width: 100%;
  height: 100%;
}

.logo {
  width: 100%;
  margin-top: 5px;
}
</style>
