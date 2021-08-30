<template>
    <footer id="footer" class="fixed w-full bottom-0 left-0 bg-white py-4 p-b-safe-4">
        <div class="container mx-auto px-8 h-full">
            <ul class="flex justify-between h-full items-center">
                <li v-for="navItem in navItems" :key="navItem">
                    <router-link :to="{ name: navItem.name, params: {} }">
                        <i class="text-2xl" :class="navItem.icon"></i>
                    </router-link>
                </li>
            </ul>
        </div>

        <div data-circle 
            class="absolute flex justify-center items-center top-0 left-1/2 
            transform -translate-x-1/2 bg-bg cursor-pointer">
            
        </div>
        <div class="absolute bg-primary flex justify-center items-center w-12 h-12 
                text-white -top-6 left-1/2 transform -translate-x-1/2 rounded-full z-10"
            @click="goToRoute"
                >
                <i class="icofont-plus"></i>
        </div>
    </footer>
</template>
<script>
import { reactive } from 'vue'
import { NAV_BOTTOM_ITEMS } from '../constants/index'
import { useRouter } from 'vue-router'
export default {
    setup(){
        const navItems = reactive(NAV_BOTTOM_ITEMS)
        const router = useRouter()
        function goToRoute(){
            router.push({ name: 'New_transaction', params: {} })
        }
        return{
            navItems,
            goToRoute
        }
    }
}
</script>
<style scoped>
    footer#footer > div[data-circle]{
        width: 60px;
        height: 30px;
        border-bottom-left-radius: 60px;
        border-bottom-right-radius: 60px;
    }
    footer#footer ul li:nth-child(2){
        margin-right: 10%;
    }

    footer#footer ul li:nth-child(3){
        margin-left: 10%;
    }
</style>