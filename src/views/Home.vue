<template>
  <div class="home">
    <i class="icofont-wallet"></i>
    <div v-if="user">
      {{ user.displayName }}
    </div>
  </div>
</template>

<script>
import { useUser } from '../composables/useUser.js'
export default {
  setup(){
    const { getUser } = useUser()
    const { user } = getUser()

    return{
      user
    }
  }
}
</script>
