import alRequest from "@/service"

export enum AccountAPI {
  login = "/login",
  menu = "/menu",
}

export type AccountKey = "student" | "teacher" | "admin"


export const accountLoginRequest = (data: any, accountKey: AccountKey) => {
  return alRequest.post({
    url: `${AccountAPI.login}/${accountKey}`,
    data
  })
}

export const userMenuInfoRequest = (accountKey: AccountKey) => {
  return alRequest.get({
    url: `${AccountAPI.menu}/${accountKey}`
  })
}

export const requestUserInfo = (accountKey: string, id: number) => {
  return alRequest.get({
    url: `/users/${accountKey}/${id}`
  })
}
