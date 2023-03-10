<template>
  <div class="course">
    <page-search :search-form-config="searchFormConfig" />
    <n-card
      title="可选课程列表"
      style="margin-top: 20px"
      header-style="border-bottom: 1px solid #efeff5"
    >
      <br />
      <table-vue
        :table-columns-config="tableColumnsConfig"
        :table-row-data="allCourseInfoRef"
      />
    </n-card>
    <n-card
      title="已选课程列表"
      style="margin-top: 20px"
      header-style="border-bottom: 1px solid #efeff5"
    >
      <br />
      <table-vue
        :table-columns-config="tableColumnsConfig"
        :table-row-data="currentSelectCourseInfoRef"
      />
    </n-card>
  </div>
</template>

<script lang="ts" setup>
import PageSearch from '@/components/page-search'
import TableVue from '@/base-ui/table'
import { searchFormConfig } from './config/search.config'
import {
  tableColumnsConfig,
  initiaTableRowFn,
  initiaCurrentSelectCourseInfo
} from './config/content.config'
import { ref, watch } from 'vue'
import { storeToRefs } from 'pinia'
import useSystemStore from '@/store/modules/system'

// store
const systemStore = useSystemStore()
const { currentSelectCourseInfo, pageListInfo } = storeToRefs(systemStore)

// ref
const currentSelectCourseInfoRef = ref()
const allCourseInfoRef = ref()

// method
// 请求课程数据
const requestCurrentSelectCourseInfo = () => {
  // 请求所有课程数据
  systemStore.requestPageListInfoAction('course', {})
  // 请求当前课程数据
  systemStore.requestCurrentCourseInfoAction()
}
// 学生选课
const handleSelectCourseClick = (data: any) => {
  systemStore.requestSaveCourseInfoAction(data)
}
// 学生退课
const handleRemoveSelectCourseClick = (id: number) => {
  systemStore.requestRemoveSelectCourseAction(id)
}

requestCurrentSelectCourseInfo()

watch(
  () => [currentSelectCourseInfo, pageListInfo],
  () => {
    currentSelectCourseInfoRef.value = initiaCurrentSelectCourseInfo(
      currentSelectCourseInfo.value,
      handleRemoveSelectCourseClick
    )

    allCourseInfoRef.value = initiaTableRowFn(
      pageListInfo.value,
      handleSelectCourseClick
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
  padding: 10px;
  overflow-y: scroll;
}
</style>
