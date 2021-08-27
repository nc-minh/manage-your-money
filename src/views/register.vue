<template>
  <div class="mt-8">
    <div class="container mx-auto px-8">
      <!-- start form -->
      <form class="flex flex-col justify-start space-y-6" @submit="onSubmit">
        <div class="row">
          <label for="fullName" class="flex flex-col">
            <span class="font-semibold">Full Name</span>
            <input id="fullName" type="text" class="px-4 py-3 rounded-lg border border-gray-100 bg-pink-100 mt-1" placeholder="Money...">
          </label>
        </div>

        <div class="row">
          <label for="Email" class="flex flex-col">
            <span class="font-semibold">Email Address</span>
            <input id="Email" type="email" class="px-4 py-3 rounded-lg border border-gray-100 bg-pink-100 mt-1" placeholder="email@domain.com...">
          </label>
        </div>

        <div class="row">
          <label for="Password" class="flex flex-col">
            <span class="font-semibold">Password</span>
            <input id="Password" type="password" class="px-4 py-3 rounded-lg border border-gray-100 bg-pink-100 mt-1" placeholder="enter password...">
          </label>
        </div>

        <div class="row">
          <button class="py-3 text-center w-full bg-primary text-white font-bold rounded-lg" type="submit">Sign Up</button>
        </div>
      </form>
      <!-- end form -->

      <!-- start direction -->
      <div class="w-full text-center mt-6">
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
export default {
  setup() {
    function onSubmit(){
    
    }
    return{
      onSubmit
    }
  }
}
</script>
