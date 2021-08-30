<template>
    <header class="py-8">
        <div class="container mx-auto px-8">
            <div class="flex justify-between items-center">
                <div class="flex items-center">
                    <div v-if="meta.leading" class="w-10 h-10 overflow-hidden rounded-full">
                        <img class="w-full h-full object-cover" src="../assets/images/avatar.jpg" alt="">
                    </div>
                    <h1 class="text-xl font-bold text-dark ml-2">{{ meta.text }}
                        <span v-if="meta.leading">{{ user.displayName }}</span>
                    </h1>
                </div>
                <div class="flex">
                    <ul>
                        <li>
                            <i class="icofont-alarm text-2xl"></i>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </header>
</template>
<script>
import { computed } from '@vue/reactivity'
import { useRoute } from 'vue-router'
import { useUser } from '../composables/useUser.js'
export default {
    setup(){
        const route = useRoute()
        const { getUser } = useUser()
        const { user } = getUser()
        return{
            meta: computed(() => route.meta),
            user
        }
    }
}
</script>