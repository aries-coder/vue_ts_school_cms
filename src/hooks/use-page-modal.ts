import { ref, watch } from 'vue'
import { storeToRefs } from 'pinia'
import useSystemStore from '@/store/modules/system'

const systemStore = useSystemStore()
const { teacherList, departmentList, classList } = storeToRefs(systemStore)
systemStore.requestOtherListInfoAction()

export const usePageModal = (
  titles: string[],
  initiaModalFormConfig: Function,
  pageName: string
): any[] => {
  const modalFormConfig = ref()
  const defaultInfo = ref()
  const title = ref<string>()
  const eventName = ref<string>()
  const showModal = ref<boolean>(false)

  const handleEditClick = (key: boolean, info: any) => {
    switch (pageName) {
      case 'course':
        defaultInfo.value = {
          ...info,
          date: [
            new Date(info.start_time).getTime(),
            new Date(info.end_time).getTime()
          ]
        }
        break
      case 'student':
        defaultInfo.value = {
          ...info,
          date: [
            new Date(info.admission_date).getTime(),
            new Date(info.graduation_date).getTime()
          ]
        }
        break
      case 'teacher':
        defaultInfo.value = {...info}
        break
      default:
        break
    }
    title.value = titles[0]
    eventName.value = 'edit'
    showModal.value = key
  }
  const handleNewDataClick = () => {
    switch (pageName) {
      case 'student':
        modalFormConfig.value.formItems = [
          ...modalFormConfig.value.formItems,
          {
            field: 'password',
            label: '密码',
            type: 'input',
            placeholder: '请输入密码',
            itemType: 'password'
          }
        ]
        break
      case 'teacher':
        modalFormConfig.value.formItems = [
          ...modalFormConfig.value.formItems,
          {
            field: 'password',
            label: '密码',
            type: 'input',
            placeholder: '请输入密码',
            itemType: 'password'
          }
        ]
        break
      default:
        break
    }

    title.value = titles[1]
    defaultInfo.value = {}
    eventName.value = 'new'
    showModal.value = true
  }

  watch(
    () => [teacherList, departmentList, classList],
    () => {
      if (teacherList.value.length && departmentList.value.length) {
        const teacherOptions = teacherList.value.map((item: any) => ({
          label: item.name,
          value: item.id
        }))
        const departmentOptions = departmentList.value.map((item) => ({
          label: item.name,
          value: item.id
        }))
        const classOptions = classList.value.map((item) => ({
          label: item.name,
          value: item.id
        }))

        switch (pageName) {
          case 'course':
            modalFormConfig.value = initiaModalFormConfig(
              teacherOptions,
              departmentOptions
            )
            break
          case 'student':
            modalFormConfig.value = initiaModalFormConfig(
              departmentOptions,
              classOptions
            )
            break;
          case 'teacher':
            modalFormConfig.value = initiaModalFormConfig()
          default:
            break
        }
      }
    },
    { deep: true, immediate: true }
  )

  return [
    title,
    modalFormConfig,
    defaultInfo,
    eventName,
    showModal,
    handleEditClick,
    handleNewDataClick
  ]
}
