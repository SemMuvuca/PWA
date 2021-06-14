<template>
  <router-view />
</template>
<script>
import { defineComponent, provide } from 'vue';
import store from 'src/store'

export default defineComponent({
  name: 'App',
  setup () {
    provide('store', store)
  }
})
</script>
