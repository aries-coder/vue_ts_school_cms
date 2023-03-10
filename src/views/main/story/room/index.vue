<template>
  <div class="room">
    <div class="header">
      <h2>宜春职业技术学院聊天室({{ userCount }}人在线)</h2>
    </div>
    <div class="content">
      <template v-for="item in msgInfo" :key="item">
        <template v-if="item.id === id">
          <div class="message" style="justify-content: flex-end">
            <span>
              {{ item.message }}
            </span>
            &nbsp;
            <n-tag type="primary">
              {{ item.name }}
            </n-tag>
          </div>
        </template>
        <template v-else>
          <div class="message">
            <n-tag type="primary">
              {{ item.name }}
            </n-tag>
            &nbsp;
            <span>
              {{ item.message }}
            </span>
          </div>
        </template>
      </template>
    </div>
    <div class="footer">
      <n-input
        style="height: 80%"
        type="textarea"
        :bordered="false"
        ref="textareaRef"
        v-model:value="msg"
      />
      <n-button
        type="primary"
        style="padding: 0 10px; float: right"
        @click="handleMessageClick"
      >
        发送
      </n-button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import useLoginStore from '@/store/modules/login'
import useOtherStore from '@/store/modules/other'
import { io } from 'socket.io-client'
import { ref, onBeforeUnmount, onMounted } from 'vue'
import { storeToRefs } from 'pinia'

// store
const loginStore = useLoginStore()
const otherStore = useOtherStore()
const { accountKey, id, userInfo } = storeToRefs(loginStore)
const { msgInfo } = storeToRefs(otherStore)

// ref
const userCount = ref()
const socketRef = ref()
const textareaRef = ref<HTMLInputElement>()
const msg = ref('')

onMounted(() => {
  // 文本框默认聚焦
  textareaRef.value?.focus()

  /**
   * socket
   */
  // 创建实例
  socketRef.value = io('http://43.142.189.34:8006')

  // 发送事件
  socketRef.value.emit('add_user', `${accountKey.value}_${id.value}`)

  // 监听事件
  socketRef.value.on('add_user', (size: number) => {


    userCount.value = size
  })
  socketRef.value.on('remove_user', (size: number) => {

    userCount.value = size
  })
  socketRef.value.on('message', (info: object) => {
   

    otherStore.changeMsgInfo(info)
  })
})

// methods
const handleMessageClick = () => {
  // 发送 message 事件
  if (!msg.value) {
    return
  }
  socketRef.value.emit('message', { id: id.value, name: userInfo.value.name, message: msg.value })

  msg.value = ''
}

onBeforeUnmount(() => {
  socketRef.value.emit('remove_user', `${accountKey.value}_${id.value}`)
  otherStore.clearMsgInfo()
})
</script>

<style lang="less" scoped>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
.room {
  width: 100%;
  height: 100%;
  background-color: #fff;
  // overflow: scroll;
}

.header {
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  padding-left: 10px;
  // background-color: red;
  border-bottom: 1px solid #ccc;
}

.content {
  width: 100%;
  height: 70%;
  padding: 0 5px;
  // background-color: red;
}

.footer {
  width: 100%;
  height: calc(100% - 50px - 70%);
  border-top: 1px solid #ccc;
  // background-color: green;
}

.message {
  height: 40px;
  display: flex;
  align-items: center;
}
</style>
