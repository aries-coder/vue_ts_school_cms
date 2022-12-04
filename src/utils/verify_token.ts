export const initiaDateNow = () => {
  localStorage.setItem('verify_token', Date.now() + '')
}
export const verifyToken = () => {
  const initiaDateNow = localStorage.getItem('verify_token')

  return (
    Math.floor((Date.now() - parseInt(initiaDateNow!)) / 1000 / 60 / 60) > 9
  )
}
