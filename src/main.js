import axios from 'axios'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

axios.defaults.baseURL =

  process.env.NODE_ENV == "development" ? "http://localhost:5000/api/":"null"

const app = createApp(App)
app.use(router)
app.mount('#app')
