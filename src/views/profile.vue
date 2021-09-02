<template>
    <!-- start info -->
    <div class="row" v-if="user">
        <div class="container mx-auto p-8">
            <div class="text-center">
                <div class="w-24 h-24 rounded-full overflow-hidden mx-auto">
                    <img class="w-full h-full object-cover" src="../assets/images/avatar.jpg" size='xs' alt="avatar">
                </div>

                <div class="font-bold text-2xl text-primary mt-3">{{ user.displayName }}</div>
                <p class="font-semibold text-gray-400 mt-1">{{ user.email }}</p>
            </div>
        </div>
    </div>
    <!-- end info -->

    <!-- start menu -->
    <div class="row mb-20">
        <div class="container mx-auto px-8">
            <div class="grid grid-cols-1">
                <div class="col-span-1">
                    <h3 class="font-bold text-xl text-primary mb-2">General</h3>
                </div>
            </div>

            <div class="grid grid-cols-1">
                <div class="col-span-1">
                    <ul>
                        <li :class="{'text-red': index === profileOptions.length - 1}" v-for="(profileOption, index) in profileOptions" :key="index">
                            <router-link class="flex items-center justify-between py-3" :to="profileOption.route">
                                <div class="flex items-center text-left">
                                    <i class="text-2xl" :class="profileOption.icon"></i>
                                    <h5 class="font-semibold ml-3">{{ profileOption.name }}</h5>
                                </div>
                                <div class="text-right">
                                    <i class="icofont-rounded-right text-2xl"></i>
                                </div>
                            </router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <!-- end menu -->
</template>
<script>
import { reactive } from '@vue/reactivity'
import { PROFILE_OPTIONS } from '../constants/index.js'
import { useUser } from '../composables/useUser.js'
export default {
    setup(){
        const profileOptions = reactive(PROFILE_OPTIONS)
        const { getUser } = useUser()
        const { user } = getUser()


        return{
            profileOptions,
            user
        }
    }
}
</script>