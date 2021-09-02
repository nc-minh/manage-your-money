<template>
    <h1>receipt page</h1>
    <h3>{{ userID }}</h3>
    <ul>
        test
    </ul>
</template>
<script>
import { useUser } from '../composables/useUser'
export default {
    setup(){
        const { getUser } = useUser()
        const { user } = getUser()
        const userID = user.value.uid

        return{
            userID,
        }
    }
}
</script>