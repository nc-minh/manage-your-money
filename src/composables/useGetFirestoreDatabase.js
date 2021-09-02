import { ref } from 'vue'
import { projectFirestore } from '../configs/firebase.js'


// const useCGetFirestoreDatabase = (name) => {
//     const error = ref(null)
//     async function getDB(){
//         error.value = null
//       try {
//         const response = await projectFirestore.collection(name).get().then(snapshot => {
//             snapshot.docs.forEach(element => {
//                 const dataF = element.data()
//                 console.log(dataF)
//             });
//         })
//         console.log('kết quả: ', response)
//         return response
//       } catch (err) {
//         console.log({err})
//         error.value = err.message
//       }
//     }

//     return {error, getDB}
// }

// export default useCGetFirestoreDatabase 


const useCGetFirestoreDatabase = (name) => {
    const error = ref(null)
    const response = ref()
    async function getDB(){
        error.value = null
      try {
        const response = await projectFirestore.collection(name).get()
        response.forEach(element => {
            const dataF = element.data()
            console.log('chuẩn: ', dataF)
            return dataF
        })
        console.log(response)
        return response
      } catch (err) {
        console.log({err})
        error.value = err.message
      }
    }
    
    return {error, getDB, response}
    
}

export default useCGetFirestoreDatabase 