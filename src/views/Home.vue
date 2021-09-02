<template>
  <div class="container mx-auto">
    <div class="flex flex-col justify-center items-center bg-purple-400">
      <h2>Tổng số tiền đã sử dụng!</h2>
      <h1>Tổng: {{ total }}</h1>
    </div>
    <img class="mx-auto" src="../assets/images/melodyMarks.jpg" alt="">
  </div>
</template>

<script>
import { ref } from '@vue/reactivity'
import { useUser } from '../composables/useUser.js'
import useCGetFirestoreDatabase from '../composables/useGetFirestoreDatabase'
import { onMounted } from 'vue'
export default {
  setup(){
    const { getUser } = useUser()
    const { user } = getUser()
    const userID = user.value.uid
    const total = ref(0)

    const { getDB, arr } = useCGetFirestoreDatabase('transactions')
    onMounted(async () => {
        await getDB(userID)
            arr.value.forEach(element => {
              total.value = total.value + element.total
            });
    })
    return{
      user, items:arr.value, total
    }
  }
}
</script>
