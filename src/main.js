import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './assets/style/Tailwind.css'
import './assets/fonts/icofont/icofont.min.css'
import './assets/style/main.css'

import { registerGlobalComponents } from './utils/import.js'

import { projectAuth } from './configs/firebase'

let app

projectAuth.onAuthStateChanged(() => {
    if(!app){
        app = createApp(App)

        registerGlobalComponents(app)
        app.use(router)
        app.mount('#app')
    }
})