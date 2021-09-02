<template>
    <div class="container mx-auto flex flex-col justify-center items-center">
        <h2 class="text-2xl mb-4">Những khoản đã chi tiêu!</h2>
        <ul>
            <li class="bg-yellow-200 border border-red mb-1 px-4 py-2" v-for="item in items" :key="item">
                Số tiền: {{ item.total }} | danh mục: {{ item.note }}
            </li>
        </ul>
    </div>
</template>
<script>
import { useUser } from '../composables/useUser'
import useCGetFirestoreDatabase from '../composables/useGetFirestoreDatabase'
// import { onMounted } from 'vue'
export default {
    setup(){
        const { getUser } = useUser()
        const { user } = getUser()
        const userID = user.value.uid


        const { getDB, arr } = useCGetFirestoreDatabase('transactions')
        getDB(userID)
        // onMounted(async () => {
        // await getDB(userID)
        //     arr.value.forEach(element => {
        //         console.log(element.note)
        //     });
        // })



        return{
            userID, items:arr.value
        }
    }
}
</script>