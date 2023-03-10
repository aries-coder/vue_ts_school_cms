<template>
  <div class="list-detail">
    <h1 class="title">{{currentChat.title}}</h1>
    <div class="content" v-html="currentChat.content"></div>
  </div>
</template>

<script lang="ts" setup>
import useChatStore from "@/store/modules/chat"
import { useRoute } from 'vue-router'
import { storeToRefs } from "pinia"

const route = useRoute()
const { id } = route.query

// store
const chatStore = useChatStore()
const { currentChat } = storeToRefs(chatStore)

chatStore.requestChatByIdAction(parseInt(id + ''))

</script>

<style lang="less" scoped>
.list-detail {
  width: 100%;
  height: 100%;
  background-color: #fff;
  padding: 0 5px;

  .title {
    display: flex;
    justify-content: center;
  }

  .content {
    width: 100%;
  }
}
</style>
