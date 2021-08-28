<template>
  <component :is="componentId">
    <router-view></router-view>
  </component>
</template>
<script>
import { useRoute } from 'vue-router'
import { computed } from 'vue'
import { PUBLIC_LAYOUT } from './constants/index.js'
export default {
  setup() {
    const route = useRoute();
    return{
      componentId: computed(() => (route.meta.layout || PUBLIC_LAYOUT) + '-layout')
    }
  }
}
</script>
<style>

</style>
