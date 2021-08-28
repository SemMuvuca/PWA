<template>
  <div class="q-pa-md fit row juntify-center items-center content-center">
    <q-list
      class="col-12 rounded-borders"
    >
      <q-item-label header class="text-subtitle1 text-center text-weight-bold" >Carrinho</q-item-label>
      <ItemCarrinho
        v-for="(item, index) in store.state.viewer_product_list"
        :key="index"
        v-bind="item"
        :index="index"
      />
    </q-list>
    <div class="text-center col-12 row fit wrap justify-evenly items-center content-center">
      <div class="col-6">
        <div class="text-subtitle1 text-weight-bold">Total a pagar:</div>
        <div class="text-body text-weight-bold">R$ {{price}}</div>
      </div>
      <div class="col-6">
        <q-btn
          @click="metodosDePagamentoDialog"
          color="green"
          size="lg"
          icon="credit_card"
          label="pagar"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { inject, computed } from 'vue'
import { useQuasar } from "quasar"
import { useRoute } from 'vue-router'

import ItemCarrinho from 'components/ItemCarrinho'
import pagamentoDialog from 'components/PagamentoDialog'

export default {
  components: { ItemCarrinho },
  setup() {

    console.log(useRoute().params.userId)

    const $q = useQuasar()
    const store = inject('store')

    const price = computed({
      get () {
        return store.getters.totalPrice()
      }
    })

    const metodosDePagamentoDialog = () => {
      $q.dialog({
          component: pagamentoDialog,
          componentProps: {

          }
        }).onOk(() => {

        }).onCancel(() => {

        }).onDismiss(() => {
          // console.log('Called on OK or Cancel')
        })
    }

    return {
      metodosDePagamentoDialog,
      store,
      price
    }
  },
}
</script>
