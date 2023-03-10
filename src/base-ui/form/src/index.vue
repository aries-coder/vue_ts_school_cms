<template>
  <div class="form">
    <slot name="header"></slot>
    <n-form
      :label-width="modalFormConfig.labelWidth"
      label-placement="left"
      :model="formModelValue"
    >
      <n-grid :x-gap="gaps.xGap" :y-gap="gaps.yGaps" :cols="gaps.cols">
        <n-grid-item
          :style="gridItemStyle"
          v-for="item in modalFormConfig.formItems"
        >
          <template v-if="item.type === 'input'">
            <n-form-item :label="item.label">
              <n-input
                :type="item.itemType"
                :placeholder="item.placeholder"
                v-model:value="formModelValue[item.field]"
              />
            </n-form-item>
          </template>
          <template v-else-if="item.type === 'radio'">
            <n-form-item :label="item.label">
              <template v-for="iten in item.radioValue">
                <n-radio
                  :value="iten"
                  :checked="iten === formModelValue[item.field]"
                  @change="handleRadioChange(item.field, iten)"
                >
                  {{ iten }}
                </n-radio>
              </template>
            </n-form-item>
          </template>
          <template v-else-if="item.type === 'datePicker'">
            <n-form-item :label="item.label">
              <n-date-picker
                v-model:value="formModelValue[item.field]"
                :type="item.itemType"
                clearable
              />
            </n-form-item>
          </template>
          <template v-else-if="item.type === 'select'">
            <n-form-item :label="item.label">
              <n-select
                v-model:value="formModelValue[item.field]"
                filterable
                :placeholder="item.placeholder"
                :options="item.options"
            /></n-form-item>
          </template>
        </n-grid-item>
      </n-grid>
    </n-form>
    <slot name="footer"></slot>
  </div>
</template>

<script lang="ts" setup>
import { defineProps, defineEmits, ref, watch } from 'vue'

const props = defineProps({
  modalFormConfig: {
    type: Object,
    default: () => ({})
  },
  formModelValue: {
    type: Object,
    default: () => ({})
  },
  gridItemStyle: {
    type: Object,
    default: () => ({
      padding: '10px 40px'
    })
  },
  gaps: {
    type: Object,
    default: () => ({
      xGap: 9,
      yGap: 6,
      cols: 3
    })
  }
})
const emits = defineEmits(['changeFormModelValue'])

// ref
const formModelValue = ref({ ...props.formModelValue })
// Object.keys(formModelValue.value).forEach((item: string) => {
//   if (item === 'date') {
//     if (!formModelValue.value['date']) {
//       formModelValue.value['date'] = null
//     }
//   }
// })
props.modalFormConfig.formItems?.forEach((item: any) => {
  if (item.options) {
    item.options.forEach((iten: any) => {
      if (iten.label === formModelValue.value[item.field]) {
        formModelValue.value[item.field] = iten.value
      }
    })
  }
})


// method
const handleRadioChange = (field: string, value: string) => {
  formModelValue.value[field] = value
}

watch(
  () => formModelValue,
  (newValue) => {
  

    emits('changeFormModelValue', newValue)
  },
  {
    deep: true,
    immediate: true
  }
)
</script>

<style lang="less" scoped>
.form {
  width: 100%;
  height: 100%;
}
</style>
