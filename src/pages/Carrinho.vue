<template>
  <div class="q-pa-md q-gutter-md">
    <q-list
      class="rounded-borders"
      style="max-width: 600px"
    >
      <q-item-label header>Carrinho</q-item-label>
      <ItemCarrinho
        v-for="(item, index) in store.state.viewer_product_list"
        :key="index"
        v-bind="item"
        :index="index"
      />
    </q-list>
    <div class="fit row wrap justify-around items-center content-center">
      <div class="col-6">
        <p>Total a pagar:</p>
        <p>R$ {{price}}</p>
      </div>
      <div class="col-5">
        <q-btn
          @click="console.log('tá pago seu')"
          color="green"
          icon="qr_code_2"
          label="pagar"
        />
      </div>
    </div>
  </div>
</template>

<script>
import ItemCarrinho from '../components/ItemCarrinho.vue'
import { inject, computed } from 'vue'

export default {
  components: { ItemCarrinho },
  setup() {
    const store = inject('store')

    const price = computed({
      get () {
        return store.getters.totalPrice()
      }
    })

    return {
      store,
      price
    }
  },
}
</script>
