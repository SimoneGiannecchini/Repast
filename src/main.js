import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { BCard, BButton, BContainer, BRow, BCol } from 'bootstrap-vue-next'
import 'bootstrap-vue-next/dist/bootstrap-vue-next.css'

const app = createApp(App)

app.component('b-card', BCard)
app.component('b-button', BButton)
app.component('b-container', BContainer)
app.component('b-row', BRow)
app.component('b-col', BCol)

app.use(router)
app.use(store)

app.mount('#app')
