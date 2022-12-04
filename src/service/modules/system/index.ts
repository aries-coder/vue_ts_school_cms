import alRequest, { AccountKey } from '@/service'

export const requestUpdateUserInfo = (data: any, accountKey: AccountKey, id: number) => {
  return alRequest.patch({
    url: `/users/${accountKey}/${id}`,
    data
  })
}

export const requestPageListInfo = (url: string, data: any) => {
  return alRequest.post({
    url,
    data
  })
}

export const requestCurrentCourseInfo = (url: string) => {
  return alRequest.get({
    url
  })
}

export const requestSaveCourseInfo = (data: object) => {
  return alRequest.post({
    url: '/student/course',
    data
  })
}

export const requestRemoveInfoById = (id: number, pageName: string, accountKey: AccountKey) => {
  return alRequest.delete({
    url: `/${accountKey}/${pageName}/${id}`
  })
}

export const requestEditPageInfo = (id: number, pageName: string, accountKey: AccountKey, data: any) => {
  return alRequest.patch({
    url: `/${accountKey}/${pageName}/${id}`,
    data
  })
}

export const requestCreatePageInfo = (accountKey: AccountKey, pageName: string, data: any) => {
  return alRequest.post({
    url: `/${accountKey}/${pageName}`,
    data
  })
}
