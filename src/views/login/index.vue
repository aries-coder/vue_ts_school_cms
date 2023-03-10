<template>
  <div class="login">
    <div class="wrapper">
      <n-card title="马勒戈壁后台管理系统" header-style="text-align: center">
        <n-tabs
          default-value="student"
          size="large"
          justify-content="space-evenly"
        >
          <template v-for="item in tabPaneItems">
            <n-tab-pane :name="item.name" :tab="item.tab">
              <login-form
                :form-config="item.formConfig"
                @handle-login-click="handleLoginClick"
              />
            </n-tab-pane>
          </template>
        </n-tabs>
      </n-card>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { AccountKey } from '@/service'
// 组件
import LoginForm from '@/components/login-form'

// 框架
import useLoginStore from '@/store/modules/login'

// store
const loginStore = useLoginStore()

const tabPaneItems = [
  {
    name: 'student',
    tab: '学生',
    formConfig: {
      label: '学号',
      placeholder: '请输入学号',
      accountKey: "student"
    }
  },
  {
    name: 'teacher',
    tab: '教师',
    formConfig: {
      label: '工号',
      placeholder: '请输入工号',
      accountKey: "teacher"
    }
  },
  {
    name: 'admin',
    tab: '管理员',
    formConfig: {
      label: '账号',
      placeholder: '请输入管理员账号',
      accountKey: "admin"
    }
  }
]

const handleLoginClick = (formValue: any, accountKey: AccountKey) => {
  loginStore.accountLoginRequestAction(formValue, accountKey)
}
</script>

<style lang="less" scoped>
.login {
  width: 100%;
  height: 100%;
  background-image: url('@/assets/images/bg.svg');
  display: flex;
  justify-content: center;
  align-items: center;
}

.wrapper {
  width: 350px;
}
</style>
