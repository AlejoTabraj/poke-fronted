import './app/modules/shared/styles/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './app/core/App.vue'
import router from './app/core/routes'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

const app = createApp(App)
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)
app.use(pinia)
app.use(router)

app.mount('#app')
