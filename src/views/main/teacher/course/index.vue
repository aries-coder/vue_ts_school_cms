<template>
  <div class="course">
    <n-card
      title="自己授课列表"
      header-style="border-bottom: 1px solid #efeff5"
    >
      <br />
      <table-vue
        :table-columns-config="currentDatatableColumnsConfig"
        :table-row-data="currentTeachingCourseInfoRef"
      />
    </n-card>
    <n-card
      title="所有授课列表"
      style="margin-top: 40px"
      header-style="border-bottom: 1px solid #efeff5"
    >
      <br />
      <table-vue
        :table-columns-config="tableColumnsConfig"
        :table-row-data="allCourseInfoRef"
      />
    </n-card>
  </div>
</template>

<script lang="ts" setup>
import TableVue from '@/base-ui/table'
import {
  tableColumnsConfig,
  currentDatatableColumnsConfig,
  initiaTableRowFn,
  initiaCurrentTeachingCourseInfo
} from './config/content.config'
import { storeToRefs } from 'pinia'
import useSystemStore from '@/store/modules/system'
import { ref, watch } from 'vue'

// store
const systemStore = useSystemStore()
const { currentTeachingCourseInfo, pageListInfo } = storeToRefs(systemStore)

// ref
const currentTeachingCourseInfoRef = ref()
const allCourseInfoRef = ref()

// method
// 请求课程数据
const requestCurrentTeachingCourseInfo = () => {
  // 请求所有课程数据
  systemStore.requestPageListInfoAction('course', {})
  // 请求当前课程数据
  systemStore.requestCurrentCourseInfoAction()
}
requestCurrentTeachingCourseInfo()

watch(
  () => [pageListInfo, currentTeachingCourseInfo],
  () => {


    allCourseInfoRef.value = initiaTableRowFn(pageListInfo.value)
    currentTeachingCourseInfoRef.value = initiaCurrentTeachingCourseInfo(
      currentTeachingCourseInfo.value,
      () => {}
    )
  },
  {
    deep: true,
    immediate: true
  }
)
</script>

<style lang="less" scoped>
.course {
  width: 100%;
  height: 100%;
  background-color: #fff;
  border-radius: 10px;
  padding: 10px;
  overflow: scroll;
}
</style>
