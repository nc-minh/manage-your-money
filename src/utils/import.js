import { defineAsyncComponent } from 'vue'

export function registerGlobalComponents(app){
    app.component('auth-layout', defineAsyncComponent(() => import('../layouts/Auth.vue')))
    app.component('default-layout', defineAsyncComponent(() => import('../layouts/Default.vue')))
}