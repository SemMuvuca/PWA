<template>
  <q-page class="flex flex-center">
    <div
      :style="{ color: store.state.colorCode }"
      class="counter-square"
    >
      {{ store.state.counter }}
      <sup>2</sup> =
      {{store.getters.counterSquared()}}
    </div>
    <div class="buttons">
      <button @click="store.methods.decreaseCounter">-</button>
      <button @click="store.methods.increaseCounter">+</button>
    </div>
    <div>
      <input
        type="text"
        placeholder="Enter color code"
        v-model="colorCode"
      >
    </div>
  </q-page>
</template>

<script>
import { defineComponent, inject, computed } from 'vue';

export default defineComponent({
  name: 'PageIndex',
  setup () {
    const store = inject('store')

    const colorCode = computed({
      get () {
        return store.state.colorCode
      },
      set (val) {
        store.methods.setColorCode(val)
      }
    })
    return {
      store,
      colorCode
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
