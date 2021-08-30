<template>
    <h3>Logout...</h3>
</template>
<script>
import { useRouter } from 'vue-router'
import { useLogOut } from '../composables/useLogOut.js'
export default {
    setup(){
        const router = useRouter()
        const { error, logOut } = useLogOut()
        async function onLogOut(){
            await logOut()
            if(!error.value){
                router.push({name: 'Login', params: {}})
            }
        }
        onLogOut()
        
        
        return{}
    }
}
</script>