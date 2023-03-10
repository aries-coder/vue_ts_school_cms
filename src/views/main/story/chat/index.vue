<template>
  <div class="chat">
    <Toolbar
      style="border-bottom: 1px solid #ccc"
      :editor="editorRef"
      :defaultConfig="toolbarConfig"
      :mode="mode"
    ></Toolbar>
    <n-input placeholder="请输入标题" v-model:value="title" :bordered="false" />
    <Editor
      style="height: calc(100% - 41px - 34px); overflow-y: hidden"
      v-model="valueHtml"
      :defaultConfig="editorConfig"
      :mode="mode"
      @onCreated="handleCreated"
    />
  </div>
  <n-button class="btn" @click="handleCreateChatClick">
    <n-icon><cash-icon /></n-icon>
    提交
  </n-button>
</template>

<script lang="ts" setup>
import '@wangeditor/editor/dist/css/style.css' // 引入 css

import { onBeforeUnmount, ref, shallowRef, onMounted } from 'vue'
import { Editor, Toolbar } from '@wangeditor/editor-for-vue'
import { DomEditor } from '@wangeditor/editor'
import { CashOutline as CashIcon } from '@vicons/ionicons5'
import useChatStore from '@/store/modules/chat'

// store
const chatStore = useChatStore()

// data
const editorRef = shallowRef()
const valueHtml = ref('<p></p>')
const title = ref('')
const toolbarConfig = ref<any>({})
toolbarConfig.value.excludeKeys = ['group-image', 'group-video']
const editorConfig = { placeholder: '请输入内容...' }
const mode = ref('default')

// 组件销毁时，也及时销毁编辑器
onBeforeUnmount(() => {
  const editor = editorRef.value
  if (editor == null) return
  editor.destroy()
})

const handleCreated = (editor: any) => {
  editorRef.value = editor // 记录 editor 实例，重要！
}

const handleCreateChatClick = () => {
  if (!(title.value.length)) {
    return window.$message.info('标题不能为空')
  }

  if (title.value.length > 10) {
    return window.$message.info('标题限定在十个字符以内')
  }

  if (valueHtml.value.length < 50) {
    return window.$message.info('字数太少，不能发布')
  }
  chatStore.handleCreateChatAction(title.value, valueHtml.value)
  valueHtml.value = '<p></p>'
  title.value = ''
}
</script>

<style lang="less" scoped>
.chat {
  width: 100%;
  height: 100%;
  background-color: #fff;
  position: relative;
  overflow-y: scroll;
  overflow-y: overlay;
}

.btn {
  position: absolute;
  top: 23px;
  right: 23px;
}
</style>
