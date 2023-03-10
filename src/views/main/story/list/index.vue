<template>
  <div class="chat-list">
    <template v-for="(chat, index) in chatList" :key="index">
      <h2 @click="handleChatDetailClick(chat.id, chat.createdAt)">
        {{ chat.title }}_{{ formatUtcTime(chat.createdAt) }}
      </h2>
    </template>
  </div>
</template>

<script lang="ts" setup>
import useChatStore from '@/store/modules/chat'
import { formatUtcTime } from '@/utils/formatTime'
import { storeToRefs } from 'pinia'
import { useRouter } from 'vue-router'

// store
const chatStore = useChatStore()
const { chatList } = storeToRefs(chatStore)
chatStore.requestChatListAction()

// router
const router = useRouter()

// method
const handleChatDetailClick = (id: number, time: string) => {
  router.push({
    path: '/main/story/list/detail',
    query: {
      timestamp: new Date(formatUtcTime(time, 'YYYY-MM-DD HH:mm:ss')).getTime(),
      id
    }
  })
}
</script>

<style lang="less" scoped>
.chat-list {
  // padding-top: 50px;
  widows: 100%;
  height: 100%;
  background-color: #fff;
  overflow-y: scroll;
  h2 {
    width: 100%;
    display: flex;
    justify-content: center;
    border-bottom: 1px solid #ccc;
    padding: 20px 0;
    cursor: pointer;
  }
}
</style>
