import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import Calculator from "./components/Calculator.vue";

// createApp(App).mount('#app')
const app = createApp(App)

app.component('calculator-comp', Calculator)

app.mount('#app')