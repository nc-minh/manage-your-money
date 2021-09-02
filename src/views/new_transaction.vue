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
                                <input v-model="total" id="total" class="text-4xl text-dark w-full outline-none mt-1" placeholder="0" type="number">
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
                                    <input v-model="location" id="location" class="text-dark w-full outline-none" placeholder="Location" type="text">
                                </div>
                            </label>
                        </div>
                        <div class="row">
                            <label for="withPerson" class="flex items-center">
                                <div class="flex items-center flex-none w-10 text-right leading-10 mr-4 py-3">
                                    <span class="flex-none w-10 mr-4">
                                        <i class="icofont-users-alt-6 text-2xl"></i>
                                    </span>
                                </div>

                                <div class="flex-1 border-b border-gray-100 pb-1">
                                    <input v-model="withPerson" id="withPerson" class="text-dark w-full outline-none" placeholder="Who do you trade with?" type="text">
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
                                    <div class="w-full font-semibold cursor-pointer">Upload photos</div>
                                    <input class="w-0 h-0 overflow-hidden absolute" type="file" name="upload" id="upload" @change="onChangeFile">
                                </div>
                            </label>
                        </div>
                    </div>
                </div>

                <div class="text-red my-3">
                    {{ errorFile }}
                </div>
            </div>
            <!-- end upload photos -->
        </template>
        <!-- end advanced form -->
        <button type="submit" class="bg-primary text-white">thêm vào</button>
    </form>
</template>
<script>
import { ref } from '@vue/reactivity'
import { useUser } from '../composables/useUser'
import useCollection from '../composables/useCollection'
import useStorage from '../composables/useStorage'
export default {
    setup(){
        const isMoreDetails = ref(false)
        const total = ref('')
        const category = ref('')
        const note = ref('')
        const date = ref(new Date())
        const location = ref('')
        const withPerson = ref('')
        const file = ref(null)
        const errorFile = ref(null)

        const { error, addRecord } = useCollection('transactions')
        const { getUser } = useUser()
        const { user } = getUser()
        const { url, uploadFile } = useStorage('transactions')

        function onChangeFile(event){
            const select = event.target.files[0]
            const typesFile = ['image/png', 'image/jpg ', 'image/jpeg']
            console.log('ok: ', select)


            if(select && typesFile.includes(select.type)){
                file.value = select
            }else{
                file.value = null
                errorFile.value = 'Không thể tải ảnh!'
            }
        }

        async function onSubmit(){

            if(file.value) await uploadFile(file.value)
            console.log('url file: ', url);

            const transactions = {
                total: parseInt(total.value),
                category: category.value,
                note: note.value,
                date: date.value,
                userID: user.value.uid,
                location: location.value,
                withPerson: withPerson.value,
                image: url.value
            }
            console.log(transactions);

            total.value = ''
            category.value = ''
            note.value = ''
            date.value = new Date()
            location.value = ''
            withPerson.value = ''

            
            await addRecord(transactions)
            console.log(error)
            console.log('created');

        }
        return{
            onSubmit,
            isMoreDetails, total, category, note, date,
            onChangeFile,
            errorFile,
            location, withPerson
        }
    }
}
</script>