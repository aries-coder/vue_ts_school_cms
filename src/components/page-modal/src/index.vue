<template>
  <div></div>
</template>

<script lang="ts" setup>
import { useDialog } from 'naive-ui'
import useSystemStore from '@/store/modules/system'
import { defineEmits, h, defineProps, watch, ref, PropType } from 'vue'
import FormVue from '@/base-ui/form'

const props = defineProps({
  modalFormConfig: {
    type: Object,
    default: () => ({})
  },
  defaultInfo: {
    type: Object,
    default: () => ({})
  },
  title: {
    type: String,
    default: ''
  },
  eventName: {
    type: String,
    default: ''
  },
  pageName: {
    type: String
  }
})
const emits = defineEmits(['handleShowModal'])

// store
const systemStore = useSystemStore()

// ref
const formModelValue = ref<any>({})

// dialog
const dialog = useDialog()
function initiaDialogFn() {
  dialog.success({
    showIcon: false,
    title: () => {
      return h(
        'h3',
        {
          style: {
            margin: '0 auto'
          }
        },
        {
          default: () => props.title
        }
      )
    },
    content: () => {
      return h('div', [
        h(FormVue, {
          modalFormConfig: props.modalFormConfig,
          formModelValue: formModelValue.value,
          onChangeFormModelValue: changeFormModelValue,
          gaps: {
            xGap: 1,
            yGap: 1,
            cols: 1
          },
          gridItemStyle: {}
        })
      ])
    },
    positiveText: '确定',
    negativeText: '取消',
    maskClosable: false,
    onMaskClick: () => {
      window.$message.success('不能关闭')
    },
    onEsc: () => {
      emits('handleShowModal', false)
    },
    onClose: () => {
      emits('handleShowModal', false)
    },
    onPositiveClick: () => {
      switch (props.eventName) {
        case 'updateCurrentUserInfo':
          systemStore.requestUpdateUserInfoAction(
            formModelValue.value,
            props.defaultInfo.id
          )
          break
        case 'edit':
          systemStore.requestEditPageInfoAction(
            props.defaultInfo.id,
            props.pageName!,
            { ...formModelValue.value }
          )
          break
        case 'new':
          systemStore.requestCreatePageInfoAction(props.pageName!, {
            ...formModelValue.value
          })
          break
        default:
          break
      }
      emits('handleShowModal', false)
    },
    onNegativeClick: () => {
      emits('handleShowModal', false)
    }
  })
}

watch(
  () => [props.modalFormConfig, props.defaultInfo],
  ([newModalFormConfig, newDefaultInfo]) => {
    newModalFormConfig.formItems.forEach((item: any) => {
      formModelValue.value[item.field] = ''
      if (Object.keys(newDefaultInfo).length > 0) {
        formModelValue.value[item.field] = newDefaultInfo[item.field]
      }
    })
    initiaDialogFn()
  },
  {
    immediate: true,
    deep: true
  }
)

// method
const changeFormModelValue = (formValue: any) => {
  formModelValue.value = { ...formValue.value }
}
</script>

<style lang="less" scoped></style>
