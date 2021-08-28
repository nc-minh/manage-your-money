import { ref } from 'vue'
import { projectAuth } from '../configs/firebase.js'

const error = ref(null)
const isPending = ref(false)

async function signIn(email, password){
  isPending.value = true
  error.value = null
  try {
    const response = await projectAuth.signInWithEmailAndPassword(email, password)
    if(!response) throw new Error('lỗi')
    console.log(response)
    return response
  } catch (err) {
    console.log({err})
    error.value = err.message
  } finally {
    isPending.value = false
  }
}

export function useSignIn(){
  
  return{error, isPending, signIn}
  
}
