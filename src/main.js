import axios from 'axios'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

axios.defaults.baseURL =
  process.env.NODE_ENV == "development" ? "http://localhost:4000/api/":"https://sak-time.herokuapp.com/api/"

const app = createApp(App)
app.use(router)
app.use(VueSweetalert2);
app.mount('#app')
