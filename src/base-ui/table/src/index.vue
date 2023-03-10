<template>
  <div>
    <n-data-table
      :bordered="true"
      :single-line="false"
      :columns="tableColumnsConfig"
      :data="tableRowData"
      :pagination="pagination"
      :scroll-x="tableScrollX"
    />
  </div>
</template>

<script lang="ts" setup>
import { ref, h } from 'vue'
import type { DataTableColumns } from 'naive-ui'

import { defineProps, PropType } from 'vue'

defineProps({
  tableColumnsConfig: {
    type: Array as PropType<DataTableColumns>,
    default: () => []
  },
  tableRowData: {
    type: Array as PropType<any[]>,
    default: () => []
  },
  tableScrollX: {
    type: Number,
    default: 0
  }
})

const pagination = ref({
  pageSize: 5,
  page: 1,
  showSizePicker: true,
  showQuickJumper: true,
  pageSizes: [3, 5, 7],
  goto: '跳至',
  onChange: (page: number) => {
    pagination.value.page = page
  },
  onUpdatePageSize: (pageSize: number) => {
    pagination.value.pageSize = pageSize
    pagination.value.page = 1
  }
})
</script>

<style lang="less" scoped></style>
