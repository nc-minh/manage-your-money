import { ref } from 'vue'
import { projectFirestore } from '../configs/firebase.js'

const useCGetFirestoreDatabase = (name) => {
    const error = ref(null)
    const arr = ref([])
    async function getDB(userID){
        error.value = null
      try {
        const response = await projectFirestore.collection(name).get()
        response.forEach(element => {
            const dataF = element.data()
            if(dataF.userID === userID){
              arr.value.push(dataF)
            }
        })
        return response
      } catch (err) {
        console.log({err})
        error.value = err.message
      }
    }
    
    return {error, getDB, arr}
    
}

export default useCGetFirestoreDatabase 