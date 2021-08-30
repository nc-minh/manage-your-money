import { ref } from 'vue'
import { projectAuth } from '../configs/firebase.js'

const error = ref(null)

async function logOut(){
  try {
    const response = await projectAuth.signOut()
    return response
  } catch (err) {
    console.log({err})
    error.value = err.message
  }
}

export function useLogOut(){
  
  return{error, logOut}
  
}
