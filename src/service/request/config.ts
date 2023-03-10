let BASE_URL: string
const TIME_OUT = 5000

switch (process.env.NODE_ENV) {
  case 'development':
    BASE_URL = '/api'
    break
  case 'production':
    BASE_URL = 'http://43.142.189.34:8006'
    break
  default:
    BASE_URL = 'http://43.142.189.34:8006'
    break
}

export { BASE_URL, TIME_OUT }
