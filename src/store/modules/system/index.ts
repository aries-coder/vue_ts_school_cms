import {
  AccountKey,
  requestCurrentCourseInfo,
  requestEditPageInfo,
  requestPageListInfo,
  requestRemoveInfoById,
  requestSaveCourseInfo,
  requestUpdateUserInfo,
  requestUserInfo,
  requestCreatePageInfo
} from '@/service'
import { defineStore } from 'pinia'
import useLoginStore from '../login'
import { ISelectCourseType } from './type'

const loginStore = useLoginStore()

const useSystemStore = defineStore('student', {
  state: () => ({
    pageListInfo: [],
    currentSelectCourseInfo: [] as any[],
    currentTeachingCourseInfo: [],
    teacherList: [] as any[],
    departmentList: [] as any[],
    classList: [] as any[]
  }),
  actions: {
    async requestUpdateUserInfoAction(data: any, id: number) {
      const res = await requestUpdateUserInfo(data, loginStore.accountKey, id)
      window.$message.success(res)
      loginStore.userInfo = await requestUserInfo(
        loginStore.accountKey,
        loginStore.id
      )
    },
    async requestPageListInfoAction(pageName: string, data: any) {
      const url = `/${loginStore.accountKey}/${pageName}/list`
      const res = await requestPageListInfo(url, data)

      this.pageListInfo = res
    },
    // 请求学生所选/老师教授课程
    async requestCurrentCourseInfoAction() {
      const url = `/${loginStore.accountKey}/course/list`
      const res = await requestCurrentCourseInfo(url)
      switch (loginStore.accountKey) {
        case 'student':
          this.currentSelectCourseInfo = res
          break
        case 'teacher':
          this.currentTeachingCourseInfo = res
          break
        default:
          break
      }
    },
    // 学生选课
    async requestSaveCourseInfoAction(info: ISelectCourseType) {
      // 验证课程中是否有该课程
      for (const item of this.currentSelectCourseInfo) {
        if (item.course_id === info.course_id) {
          return window.$message.info('课程中已有该课程')
        }
      }
      const res = await requestSaveCourseInfo(info)
      window.$message.success(res)
      this.requestCurrentCourseInfoAction()
    },
    // 学生退课
    async requestRemoveSelectCourseAction(id: number) {
      const res = await requestRemoveInfoById(
        id,
        'course',
        loginStore.accountKey
      )
      window.$message.success(res)
      this.requestCurrentCourseInfoAction()
    },

    // 管理员操作
    // delete
    async requestRemovePageInfoAction(id: number, pageName: string) {
      const res = await requestRemoveInfoById(
        id,
        pageName,
        loginStore.accountKey
      )
      window.$message.success(res)
      this.requestPageListInfoAction(pageName, {})
    },
    // edit
    async requestEditPageInfoAction(id: number, pageName: string, info: any) {
      const res = await requestEditPageInfo(
        id,
        pageName,
        loginStore.accountKey,
        info
      )
      this.requestPageListInfoAction(pageName, {})
      window.$message.success(res)
    },
    // new
    async requestCreatePageInfoAction(pageName: string, data: any) {
      for (const item of Object.keys(data)) {
        if (!data[item]) {
          return window.$message.info('参数不能为空')
        }
      }
      const res = await requestCreatePageInfo(
        loginStore.accountKey,
        pageName,
        data
      )
      this.requestPageListInfoAction(pageName, {})
      window.$message.success(res)
    },

    // 因项目需要所以添加一个请求teacher和department以及班级的请求
    async requestOtherListInfoAction() {
      const teacherRes = await requestPageListInfo(
        `/${loginStore.accountKey}/teacher/list`,
        {}
      )
      this.teacherList = teacherRes

      const departmentRes = await requestPageListInfo(
        `/${loginStore.accountKey}/department/list`,
        {}
      )
      this.departmentList = departmentRes

      const classRes = await requestPageListInfo(
        `/${loginStore.accountKey}/class/list`,
        {}
      )
      this.classList = classRes
    }
  }
})

export default useSystemStore
