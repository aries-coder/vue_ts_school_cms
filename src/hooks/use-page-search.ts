import { ref, watch } from 'vue'
import { storeToRefs } from 'pinia'
import useSystemStore from '@/store/modules/system'
const systemStore = useSystemStore()
const { teacherList, departmentList, classList } = storeToRefs(systemStore)
systemStore.requestOtherListInfoAction()

export const usePageSearch = (
  initiaSearchFormConfig: Function,
  pageName: string
): any[] => {
  const pageContentRef = ref()
  const searchFormConfig = ref()

  const handleSearchClick = (info: any) => {
    pageContentRef.value.getPageData(info)
  }
  const handleResetClick = () => {
    pageContentRef.value.getPageData()
  }

  watch(
    () => [teacherList, departmentList, classList],
    () => {
      if (teacherList.value.length) {
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
            searchFormConfig.value = initiaSearchFormConfig(teacherOptions)
            break
          case 'student':
            searchFormConfig.value = initiaSearchFormConfig(
              departmentOptions,
              classOptions
            )
            break
          case 'teacher':
            searchFormConfig.value = initiaSearchFormConfig(teacherOptions)
            break
          default:
            break
        }
      }
    },
    { deep: true, immediate: true }
  )

  return [pageContentRef, searchFormConfig, handleResetClick, handleSearchClick]
}
