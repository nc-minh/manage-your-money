<template>
  <NavigationHeader/>
  <slot/>
  <NavigationBottom/>
</template>
<script>
import NavigationBottom from '../components/NavigationBottom.vue'
import NavigationHeader from '../components/NavigationHeader.vue'
export default {
  components:{
    NavigationBottom,
    NavigationHeader
  }
}
</script>