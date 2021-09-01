import { ref } from 'vue'
import { projectFirestore } from '../configs/firebase.js'

const useCollection = (name) => {
    const error = ref(null)
    async function addRecord(record){
        error.value = null
      try {
        const response = await projectFirestore.collection(name).add(record)
        return response
      } catch (err) {
        console.log({err})
        error.value = err.message
      }
    }

    return {error, addRecord}
}

export default useCollection 
