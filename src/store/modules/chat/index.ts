import { createChatRequest, requestChatList, requestChatById } from '@/service'
import { defineStore } from 'pinia'

const useChatStore = defineStore('chat', {
  state: () => ({
    currentChat: {} as any,
    chatList: [] as any[]
  }),
  actions: {
    async handleCreateChatAction(title: string, content: string) {
      const res = await createChatRequest(title, content)
      window.$message.success(res)
    },
    async requestChatListAction() {
      const res = await requestChatList()
      this.chatList = res
    },
    async requestChatByIdAction(id: number) {
      const res = await requestChatById(id)
      this.currentChat = res
    }
  }
})

export default useChatStore
