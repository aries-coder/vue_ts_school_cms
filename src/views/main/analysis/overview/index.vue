<template>
  <div class="overview">
    <n-card class="card" title="关于" :segmented="{ content: true }">
      Vue3+TS Admin 是基于 Vue3、Pinia、VueRouter、Vite、Typescript、Naive UI
      、WangEditor 等后台系统解决方案。
    </n-card>
    <n-card class="card" title="前端技术栈" :segmented="{ content: true }">
      <ul>
        <li v-for="item in technologyList" :key="item.label">
          <span>{{ item.label }}:</span>
          &nbsp;&nbsp;
          <a href="#">{{ item.value }}</a>
        </li>
      </ul>
    </n-card>
    <n-card class="card" title="后端技术栈" :segmented="{ content: true }">
      <ul>
        <li v-for="item in technologyList2" :key="item.label">
          <span>{{ item.label }}:</span>
          &nbsp;&nbsp;
          <a href="#">{{ item.value }}</a>
        </li>
      </ul>
    </n-card>
    <n-card class="card" title="前端项目结构" :segmented="{ content: true }">
      <code>
        <pre>{{ tree }}</pre>
      </code>
    </n-card>
    <n-card class="card" title="后端项目结构" :segmented="{ content: true }">
      <code>
        <pre>{{ tree2 }}</pre>
      </code>
    </n-card>
  </div>
</template>

<script lang="ts" setup>
import { tree, tree2 } from './tree-code'
const technologyList = [
  {
    label: '开发工具',
    value: 'Visual Studio Code'
  },
  {
    label: '编程语言',
    value: 'Javascript / Typescript'
  },
  {
    label: '构建工具',
    value: 'Vite 3.x'
  },
  {
    label: '前端框架',
    value: 'Vue 3.x'
  },
  {
    label: '状态管理',
    value: 'Pinia 2.x'
  },
  {
    label: '路由工具',
    value: 'Vue-router 4.x'
  },
  {
    label: 'UI 框架',
    value: 'Naive UI'
  },
  {
    label: '富文本',
    value: 'WangEditor 5.x'
  },
  {
    label: '工具库',
    value: '@vueuse/core + dayjs + mitt'
  },
  {
    label: 'CSS 预编译',
    value: 'Sass / Less'
  },
  {
    label: 'HTTP工具',
    value: 'Axios'
  },
  {
    label: '即时通信',
    value: 'Socket.io-Client'
  },
  {
    label: '代码规范',
    value: 'EditorConfig + Prettier'
  }
]
const technologyList2 = [
  {
    label: '开发工具',
    value: 'Visual Studio Code'
  },
  {
    label: '编程语言',
    value: 'Javascript / NodeJs'
  },
  {
    label: '后端框架',
    value: 'KoaJs'
  },
  {
    label: '数据库',
    value: 'mysql'
  },
  {
    label: '连接数据库方案',
    value: 'mysql2'
  },
  {
    label: '路由工具',
    value: 'Koa-Router'
  },
  {
    label: '颁发令牌（token）',
    value: 'Jsonwebtoken'
  },
  {
    label: '密码加密',
    value: 'MD5'
  },
  {
    label: '即时通信',
    value: 'Socket.io'
  }
]
</script>

<style lang="less" scoped>
.overview {
  width: 99%;
  height: 100%;
  background-color: #fff;
  padding: 0 10px;
  overflow-y: scroll;
}

.card {
  margin: 10px 0;
  // margin-right: ;
}

a {
  text-decoration: none;
}
ul {
  padding-left: 20px;
}
li {
  width: 100%;
  margin: 10px 0;

  span {
    font-weight: bold;
  }
}
</style>
