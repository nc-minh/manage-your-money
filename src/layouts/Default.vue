<template>
  <NavigationHeader/>
  <slot/>
  <NavigationBottom v-if="meta.isShowFooter"/>
</template>
<script>
import { computed } from '@vue/reactivity'
import { useRoute } from 'vue-router'
import NavigationBottom from '../components/NavigationBottom.vue'
import NavigationHeader from '../components/NavigationHeader.vue'
export default {
  components:{
    NavigationBottom,
    NavigationHeader
  },
  setup(){
    const route = useRoute()

    return{
        meta: computed(() => route.meta)
    }
}
}
</script>