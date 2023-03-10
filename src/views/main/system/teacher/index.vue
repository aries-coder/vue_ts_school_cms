<template>
  <div class="teacher">
    <page-search
      :search-form-config="searchFormConfig"
      @handle-search-click="handleSearchClick"
      @handle-reset-click="handleResetClick"
    />
    <page-content
      ref="pageContentRef"
      :table-columns-config="tableColumnsConfig"
      :init-table-row-data-fn="initiaTableRowFn"
      page-name="teacher"
      @handle-edit-click="handleEditClick"
      :table-scroll-x="1000"
    >
      <template #header>
        <div class="header">
          <h2>教师列表</h2>
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
        page-name="teacher"
        v-if="showModal"
      />
    </n-dialog-provider>
  </div>
</template>

<script lang="ts" setup>
import { initiaSearchFormConfig } from './config/search.config'
import { tableColumnsConfig, initiaTableRowFn } from './config/content.config'
import { initiaModalFormConfig } from './config/modal.config'
import PageSearch from '@/components/page-search'
import PageContent from '@/components/page-content'
import PageModal from '@/components/page-modal'
import { usePageModal } from '@/hooks/use-page-modal'
import { usePageSearch } from '@/hooks/use-page-search'


const [
  title,
  modalFormConfig,
  defaultInfo,
  eventName,
  showModal,
  handleEditClick,
  handleNewDataClick
] = usePageModal(['编辑老师信息', '新建老师'], initiaModalFormConfig, 'teacher')
const [pageContentRef, searchFormConfig, handleResetClick, handleSearchClick] =
  usePageSearch(initiaSearchFormConfig, 'teacher')
</script>

<style lang="less" scoped>
.teacher {
  width: 100%;
  height: 100%;
  background-color: #fff;
  padding: 10px;
  overflow: scroll;
}

.header {
  padding: 20px 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
}
</style>
