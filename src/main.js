import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './main.css'
import FontAwesome from './assets/FontAwesome'
import AutoFocus from './directives/AutoFocus'

createApp(App).use(router).use(FontAwesome).use(AutoFocus).mount('#app')
