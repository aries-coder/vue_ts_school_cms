<template>
  <div class="course">
    <page-search
      :search-form-config="searchFormConfig"
      @handle-search-click="handleSearchClick"
      @handle-reset-click="handleResetClick"
    />
    <page-content
      ref="pageContentRef"
      :table-columns-config="tableColumnsConfig"
      :init-table-row-data-fn="initiaTableRowFn"
      page-name="course"
      @handle-edit-click="handleEditClick"
    >
      <template #header>
        <div class="header">
          <h2>课程列表</h2>
          <n-button type="primary" @click="handleNewDataClick"> 新建 </n-button>
        </div>
      </template>
    </page-content>
    <n-dialog-provider>
      <page-modal
        :title="title"
        :modal-form-config="modalFormConfig"
        :default-info="defaultInfo"
        :event-name="eventName"
        page-name="course"
        v-if="showModal"
      />
    </n-dialog-provider>
  </div>
</template>

<script lang="ts" setup>
import PageSearch from '@/components/page-search'
import PageModal from '@/components/page-modal'
import PageContent from '@/components/page-content'
import { initiaSearchFormConfig } from './config/search.config'
import { tableColumnsConfig, initiaTableRowFn } from './config/content.config'
import { initiaModalFormConfig } from './config/modal.config'
import { usePageModal } from '@/hooks/use-page-modal'
import { usePageSearch } from '@/hooks/use-page-search'

// hooks
const [
  title,
  modalFormConfig,
  defaultInfo,
  eventName,
  showModal,
  handleEditClick,
  handleNewDataClick
] = usePageModal(['编辑课程', '新建课程'], initiaModalFormConfig, 'course')

const [pageContentRef, searchFormConfig, handleResetClick, handleSearchClick] =
  usePageSearch(initiaSearchFormConfig, 'course')
</script>

<style lang="less" scoped>
.course {
  width: 100%;
  height: 100%;
  background-color: #fff;
  padding: 10px;
  overflow: scroll;
}

.header {
  margin: 10px 0;
  display: flex;
  justify-content: space-between;
}
</style>
