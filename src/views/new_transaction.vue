<template>
    <form @submit.prevent="onSubmit">
        <!-- start main form -->
        <div class="row mt-8">
            <div class="bg-white rounded-lg py-4">
                <div class="container mx-auto px-8">
                    <div class="row">
                        <label for="total" class="flex items-end">
                            <div class="w-10 text-right leading-10 mr-4 pb-1">
                                <span class="inline-block px-1 text-dark border border-dark rounded text-sm font-bold">VND</span>
                            </div>

                            <div class="flex flex-col border-b border-gray-100 pb-1">
                                <span class="font-semibold text-xs text-dark">Total</span>
                                <input v-model="total" id="total" class="text-4xl text-dark w-full outline-none mt-1" placeholder="0" type="text">
                            </div>
                        </label>
                    </div>
                    <div class="row">
                        <label for="category" class="flex items-center">
                            <div class="flex items-center flex-none w-10 text-right leading-10 mr-4 py-3">
                                <span class="inline-block ml-auto w-8 h-8 rounded-full bg-primary"></span>
                            </div>

                            <div class="flex-1 border-b border-gray-100 pb-1">
                                <input v-model="category" id="category" class="text-xl text-dark w-full outline-none" placeholder="Select a category" type="text">
                            </div>
                        </label>
                    </div>
                    <div class="row">
                        <label for="note" class="flex items-center">
                            <div class="flex items-center flex-none w-10 text-right leading-10 mr-4 py-3">
                                <span class="flex-none w-10 mr-4">
                                    <i class="icofont-file-text text-2xl"></i>
                                </span>
                            </div>

                            <div class="flex-1 border-b border-gray-100 pb-1">
                                <input v-model="note" id="note" class="text-dark w-full outline-none" placeholder="Note" type="text">
                            </div>
                        </label>
                    </div>
                    <div class="row">
                        <label for="date" class="flex items-center">
                            <div class="flex-none w-10 mr-4">
                                <span class="flex items-center justify-end text-dark">
                                    <i class="icofont-calendar text-2xl"></i>
                                </span>
                            </div>

                            <div class="flex-1 py-2 border-b border-gray-100">
                                <div class="text-dark w-full">{{ date }}</div>
                            </div>
                        </label>
                    </div>
                    <div class="row">
                        <label for="wallet" class="flex items-center">
                            <div class="flex-none w-10 mr-4">
                                <span class="flex items-center justify-end text-dark">
                                    <i class="icofont-wallet text-2xl"></i>
                                </span>
                            </div>

                            <div class="flex-1 py-2">
                                <div class="text-dark w-full">My wallet</div>
                            </div>
                        </label>
                    </div>
                </div>
            </div>
        </div>
        <!-- end main form -->

        <!-- start details -->
        <div v-if="!isMoreDetails" class="row mt-8">
            <button @click="isMoreDetails = !isMoreDetails" class="bg-white rounded-t-lg py-3 w-full text-primary font-semibold">More Details</button>
        </div>
        <!-- end detail -->

        <!-- start advanced form -->
        <template v-if="isMoreDetails">
            <div class="row mt-8">
                <div class="bg-white rounded-lg py-4">
                    <div class="container mx-auto px-8">
                        <div class="row">
                            <label for="location" class="flex items-center">
                                <div class="flex items-center flex-none w-10 text-right leading-10 mr-4 py-3">
                                    <span class="flex-none w-10 mr-4">
                                        <i class="icofont-location-pin text-2xl"></i>
                                    </span>
                                </div>

                                <div class="flex-1 border-b border-gray-100 pb-1">
                                    <input id="location" class="text-dark w-full outline-none" placeholder="Location" type="text">
                                </div>
                            </label>
                        </div>
                        <div class="row">
                            <label for="with" class="flex items-center">
                                <div class="flex items-center flex-none w-10 text-right leading-10 mr-4 py-3">
                                    <span class="flex-none w-10 mr-4">
                                        <i class="icofont-users-alt-6 text-2xl"></i>
                                    </span>
                                </div>

                                <div class="flex-1 border-b border-gray-100 pb-1">
                                    <input id="with" class="text-dark w-full outline-none" placeholder="Who do you trade with?" type="text">
                                </div>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
            <!-- start upload photos -->
            <div class="row mt-8">
                <div class="bg-white rounded-lg py-4">
                    <div class="container mx-auto px-8">
                        <div class="row">
                            <label for="upload" class="flex items-center text-primary">
                                <div class="flex items-center flex-none w-10 text-right leading-10 mr-4 py-2">
                                    <span class="flex-none w-10 mr-4">
                                        <i class="icofont-camera text-2xl"></i>
                                    </span>
                                </div>

                                <div class="flex-1 py-2">
                                    <div class="w-full">Upload photos</div>
                                </div>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
            <!-- end upload photos -->
        </template>
        <!-- end advanced form -->
    </form>
</template>
<script>
import { ref } from '@vue/reactivity'
import { useUser } from '../composables/useUser'
export default {
    setup(){
        const isMoreDetails = ref(false)
        const total = ref(0)
        const category = ref('')
        const note = ref('')
        const date = ref(new Date())

        const { getUser } = useUser()
        const { user } = getUser()
        function onSubmit(){
            const transaction = {
                total,
                category,
                note,
                date,
                userID: user.uid
            }
            console.log(transaction);
        }
        return{
            onSubmit,
            isMoreDetails, total, category, note, date
        }
    }
}
</script>