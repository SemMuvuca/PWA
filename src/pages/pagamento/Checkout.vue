<template>
  <q-page class="flex">
    <iframe width="100%" height="900vh" style="border: none;" :src='`static_site/index.html?obj=${JSON.stringify(getQueryParameters())}`'/>
  </q-page>
</template>

<script>
import { defineComponent, inject } from 'vue';

export default defineComponent({
  name: 'PageIndex',

  setup () {

    const store = inject('store')

    function getQueryParameters () {
      return {
        totalprice: store.getters.totalPrice()
      }
    }

    return {
      getQueryParameters,
    }
  }
})
</script>

<style scoped>
 .counter {
    font-size: 80px;
  }
  .buttons button {
    font-size: 40px;width: 100px;
    width: 100px;
    margin: 0 10px;
  }
</style>
