<template>
  <div class="q-pa-md q-gutter-md">
    <q-list
      bordered
      class="rounded-borders"
      style="max-width: 600px"
    >
      <q-item-label header>Carrinho</q-item-label>
      <ItemCarrinho
        v-for="(item, index) in store.state.items"
        :key="item.barcode"
        v-bind="item"
        :index="index"
      />
    </q-list>
    <div class="fit row wrap justify-around items-center content-center">
      <div class="col-6">
        <p>Total a pagar:</p>
        <p>R$ {{total_price}}</p>
      </div>
      <div class="col-5">
        <q-btn
          @click="gerarCode"
          color="primary"
          icon="qr_code_2"
          label="Gerar QR"
        />
      </div>
      <div>
        <QrCodeDialog ref="dialog"></QrCodeDialog>
      </div>
    </div>
  </div>
</template>

<script>
import ItemCarrinho from '../components/ItemCarrinho.vue'
import QrCodeDialog from '../components/QrCode.vue'
import { inject, computed } from 'vue';
import { useQuasar } from 'quasar'
export default {
  components: { ItemCarrinho, QrCodeDialog },
  setup() {
    const store = inject('store')
    const $q = useQuasar()
    const total_price = computed({
      get () {
        return store.getters.totalPrice()
      }
    })
    const items_list = computed({
      get () {
        let itemsList = store.state.items.map(item => ({
        barcode: item.barcode,
        quantity: item.quantity
      }))
      return JSON.stringify(itemsList)
      }
    })
    const gerarCode = () => {
      $q.dialog({
        component: QrCodeDialog,

        // props forwarded to your custom component
        componentProps: {
          value: items_list.value
          // ...more..props...
        }
      }).onOk(() => {
        console.log('OK')
      }).onCancel(() => {
        console.log('Cancel')
      }).onDismiss(() => {
        console.log('Called on OK or Cancel')
      })
    }
    return {
      store,
      total_price,
      gerarCode
    }
  },
}
</script>
