import alRequest from "@/service";

export const createChatRequest = (title: string, content: string) => {
  return alRequest.post({
    url: "/chat",
    data: {
      title,
      content
    }
  })
}

export const requestChatList = () => {
  return alRequest.post({
    url: '/chat/list'
  })
}

export const requestChatById = (id: number) => {
  return alRequest.post({
    url: `/chat/${id}`
  })
}
