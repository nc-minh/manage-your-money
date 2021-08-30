<template>
  <div class="mt-8">
    <div class="container mx-auto px-8">
      <!-- start form -->
      <form class="flex flex-col justify-start space-y-6" @submit.prevent="onSubmit">
        <div class="row">
          <label for="Email" class="flex flex-col">
            <span class="font-semibold">Email Address</span>
            <input v-model="email" id="Email" type="email" class="px-4 py-3 rounded-lg border border-gray-100 bg-pink-100 mt-1" placeholder="email@domain.com...">
          </label>
        </div>

        <div class="row">
          <label for="Password" class="flex flex-col">
            <span class="font-semibold">Password</span>
            <input id="Password" autocomplete="username" type="password" 
              class="px-4 py-3 rounded-lg border border-gray-100 bg-pink-100 mt-1" 
              placeholder="enter password..."
              v-model="password"
              >
          </label>
        </div>

        <div class="row">
          <button v-if="!isPending" class="py-3 text-center w-full bg-primary text-white font-bold rounded-lg" type="submit">Sign In</button>
          <button v-else class="py-3 text-center w-full bg-gray-700 text-white font-bold rounded-lg" type="button" disabled>Pending...</button>
        </div>
      </form>
      <!-- end form -->

      <!-- start error -->
      <div v-if="error" class="text-center text-red mt-4">
        <span>{{ error }}</span>
      </div>
      <!-- end error -->

      <!-- start direction -->
      <div class="w-full text-center mt-6">
        <span class="font-semibold">I'm a new user.</span>
        <span class="ml-1">
          <router-link :to="{ name: 'Register', params: {} }" class="text-primary font-bold">Sign Up</router-link>
        </span>
      </div>
      <!-- end direction -->
    </div>
  </div>
</template>
<script>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useSignIn } from '../composables/useSignIn.js'
export default {
  setup() {
    const { error, isPending, signIn } = useSignIn()
    const router = useRouter()

    const email = ref('')
    const password = ref('')

    async function onSubmit(){
      console.log(email, password)
      await signIn(email.value, password.value)
      if(!error.value){
        router.push({name: 'Profile', params: {}})
      }
    }
    return{
      onSubmit, email, password, error, isPending, signIn
    }
  }
}
</script>
