import { createApp } from 'vue'
import App from '@/App.vue'
import createRouter from "@/router"

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'

createApp(App).use(createRouter()).mount('#app')