<template>
    <h1>view auth</h1>
    <NavigationBrand/>
    <slot/>
</template>
<script>
import NavigationBrand from '../components/NavigationBrand.vue'
export default {
    components:{
        NavigationBrand
    }
}
</script>