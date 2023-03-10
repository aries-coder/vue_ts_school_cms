import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import piniaPersist from 'pinia-plugin-persist'
import './assets/css/index.less'
import registerApp from './global/index'
import router from './router'
import useLoginStore from './store/modules/login'

const app = createApp(App)

registerApp(app)

store.use(piniaPersist)
app.use(store)
const loginStore = useLoginStore()
loginStore.loadLocalRouter()

app.use(router).mount('#app')
