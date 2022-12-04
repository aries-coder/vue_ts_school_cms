<template>
  <div>
    <n-form
      ref="formRef"
      :model="formModel"
      :rules="rules"
      label-placement="left"
      label-width="60"
    >
      <n-form-item :label="formConfig.label" path="account">
        <n-input
          type="text"
          :placeholder="formConfig.placeholder"
          v-model:value="formModel.account"
        />
      </n-form-item>
      <n-form-item label="密码" path="password">
        <n-input
          type="password"
          placeholder="请输入密码"
          v-model:value="formModel.password"
        />
      </n-form-item>
    </n-form>
    <n-button type="primary" block secondary strong @click="handleLoginClick">
      登录
    </n-button>
  </div>
</template>

<script lang="ts" setup>
import { FormInst, FormItemRule, FormRules } from 'naive-ui'
import { ref, watch, defineEmits, defineProps } from 'vue'

const props = defineProps({
  formConfig: {
    type: Object,
    default: () => ({})
  }
})

// form相关
const formRef = ref<FormInst>()
const formModel = ref<{ account: string; password: string }>({
  account: '',
  password: ''
})
const rules: FormRules = {
  account: [
    {
      required: true,
      validator(rule: FormItemRule, value: string) {
        if (!value) {
          return new Error(`${props.formConfig.label}不能为空`)
        } else if (isNaN(Number(value))) {
          return new Error(`${props.formConfig.label}学号应该为数字`)
        }
        return true
      },
      trigger: ['input', 'blur']
    }
  ],
  password: [
    {
      required: true,
      validator(rule: FormItemRule, value: string) {
        if (!value) {
          return new Error('密码不能为空')
        }
        return true
      },
      trigger: ['input', 'blur']
    }
  ]
}

// 定义发送事件
const emits = defineEmits(['handleLoginClick'])

// 监听登录事件
const handleLoginClick = () => {
  formRef.value?.validate((errors) => {
    if (!errors) {
      emits('handleLoginClick', formModel.value, props.formConfig.accountKey)
    } else {
      // window.$message.error('请正确填写学号和密码')
    }
  })
}
</script>

<style lang="less" scoped></style>
