<template>
  <div class="page-search">
    <form-vue
      :modal-form-config="searchFormConfig"
      :form-model-value="formModelValue"
      @change-form-model-value="changeFormModelValue"
    >
      <template #header>
        <h1 class="title">{{ title }}</h1>
      </template>
      <template #footer>
        <div class="footer">
          <n-button @click="handleResetClick">
            <n-icon>
              <reset />
            </n-icon>
            重置
          </n-button>
          &nbsp;
          <n-button type="primary" @click="handleSearchClick">
            <n-icon>
              <search />
            </n-icon>
            搜索
          </n-button>
        </div>
      </template>
    </form-vue>
  </div>
</template>

<script lang="ts" setup>
import FormVue from '@/base-ui/form'
import { Reset, Search } from '@vicons/carbon'
import { defineProps, defineEmits, ref, watch } from 'vue'

const props = defineProps({
  searchFormConfig: {
    type: Object,
    default: () => ({})
  },
  title: {
    type: String,
    default: '高级检索'
  }
})
const emits = defineEmits(['handleSearchClick', 'handleResetClick'])

// ref
const formItems = ref()
const formOriginData = ref<any>({})

const formModelValue = ref()

// method
const changeFormModelValue = (updateValue: any) => {
  formModelValue.value = updateValue.value

}

const handleResetClick = () => {
  for (const key in formOriginData.value) {
    formModelValue.value[key] = formOriginData.value[key]
  }
  emits("handleResetClick")
}
const handleSearchClick = () => {
  emits("handleSearchClick", formModelValue.value)
}

watch(
  () => props.searchFormConfig,
  () => {
    if (props.searchFormConfig.formItems) {
      formItems.value = props.searchFormConfig.formItems
      formItems.value.forEach((item: any) => {
        if (item?.type === 'datePicker') {
          formOriginData.value[item['field']] = null
        } else {
          formOriginData.value[item['field']] = ''
        }
      })
      formModelValue.value = { ...formOriginData.value }
    }
  },
  {
    deep: true,
    immediate: true
  }
)
</script>

<style lang="less" scoped>
.page-search {
  width: 100%;
  // background-color: red;
  // padding-right: 100px;
}
.title {
  display: flex;
  justify-content: center;
  padding: 15px 0;
}
.footer {
  display: flex;
  padding-right: 40px;
  justify-content: flex-end;
}
</style>
