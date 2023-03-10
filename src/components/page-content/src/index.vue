<template>
  <div>
    <slot name="header"></slot>
    <table-vue
      :table-columns-config="tableColumnsConfig"
      :table-row-data="tableRowData"
      :table-scroll-x="tableScrollX"
    />
  </div>
</template>

<script lang="ts" setup>
import TableVue from '@/base-ui/table'
import { defineProps, PropType, watch, ref, defineEmits, defineExpose } from 'vue'
import type { DataTableColumns } from 'naive-ui'
import { storeToRefs } from 'pinia'
import useSystemStore from '@/store/modules/system'

const props = defineProps({
  tableColumnsConfig: {
    type: Array as PropType<DataTableColumns>,
    default: () => []
  },
  pageName: {
    type: String,
    default: ''
  },
  initTableRowDataFn: {
    type: Function
  },
  tableScrollX: {
    type: Number,
    default: 0
  }
})
const emits = defineEmits(["handleEditClick"])

// store
const systemStore = useSystemStore()
const { pageListInfo } = storeToRefs(systemStore)

// ref
const tableRowData = ref()

// method
// 根据 pageName 发送网络请求
const getPageData = (queryInfo: any = {}) => {
  systemStore.requestPageListInfoAction(props.pageName, queryInfo)
}
getPageData()

// 编辑删除操作
const handleDeleteClick = (id: number) => {
  systemStore.requestRemovePageInfoAction(id, props.pageName)


}
const handleEditClick = (key: boolean, info: any) => {
  emits("handleEditClick", key, info)
}

watch(
  () => [pageListInfo],
  () => {
    tableRowData.value = props.initTableRowDataFn!(pageListInfo.value, [
      handleEditClick,
      handleDeleteClick
    ])
  },
  {
    deep: true,
    immediate: true
  }
)

defineExpose({ getPageData })
</script>

<style lang="less" scoped></style>
