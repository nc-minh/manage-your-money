<template>
  <div class="mt-8">
    <div class="container mx-auto px-8">
      <!-- start form -->
      <form class="flex flex-col justify-start space-y-6" @submit.prevent="onSubmit">
        <div class="row">
          <label for="fullName" class="flex flex-col">
            <span class="font-semibold">Full Name</span>
            <input 
              id="fullName" 
              type="text" 
              class="px-4 py-3 rounded-lg border border-gray-100 bg-pink-100 mt-1" 
              placeholder="Money..."
              v-model="fullname"
              >
          </label>
        </div>

        <div class="row">
          <label for="Email" class="flex flex-col">
            <span class="font-semibold">Email Address</span>
            <input id="Email" type="email" class="px-4 py-3 rounded-lg border border-gray-100 bg-pink-100 mt-1" 
              placeholder="email@domain.com..."
              v-model="email"
              >
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
          <button v-if="!isPending" class="py-3 text-center w-full bg-primary text-white font-bold rounded-lg" type="submit">Sign Up</button>
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
      <div class="w-full text-center mt-6 mb-6">
        <span class="font-semibold">I'm a already a member.</span>
        <span class="ml-1">
          <router-link :to="{ name: 'Login', params: {} }" class="text-primary font-bold">Sign In</router-link>
        </span>
      </div>
      <!-- end direction -->
    </div>
  </div>
</template>
<script>
  import { ref } from 'vue'
  import { useRouter } from 'vue-router'
  import { useSignUp } from '../composables/useSignUp.js'
export default {
  setup() {
    const {error, isPending, signUp} = useSignUp()
    const router = useRouter()

    const fullname = ref('')
    const email = ref('')
    const password = ref('')

    async function onSubmit(){
      console.log(email.value, password.value);
      await signUp(email.value, password.value, fullname.value)
      if(!error.value){
       router.push({name: 'Profile', params: {}})
      }
    }
    return{
      onSubmit,
      fullname,
      email,
      password,
      error,
      isPending
    }
  }
}
</script>
