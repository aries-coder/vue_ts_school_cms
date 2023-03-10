<template>
  <n-message-provider>
    <message-ui />
  </n-message-provider>
  <router-view />
</template>

<script lang="ts" setup>
import MessageUi from '@/base-ui/message-ui/index'
</script>

<style lang="less" scoped></style>
