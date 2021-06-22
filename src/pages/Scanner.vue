<template>
  <div id="q-app" class="full-width row justify-center items-center q-pt-lg">
    <StreamBarcodeReader @decode="onDecode"></StreamBarcodeReader>
    <div class="q-pa-md q-gutter-md">
      <h6>Adicione itens ao carrinho</h6>
      <p>Direcione a sua câmera ao código de barra do produto selecionado</p>
      <q-btn @click="barcodeVai">Vai item</q-btn>
    </div>

  </div>
</template>

<script>
import { StreamBarcodeReader } from "vue-barcode-reader"
import DetalhesItem from '../components/DetalhesItem.vue'
import { api } from "boot/axios"
import { useQuasar } from 'quasar'
import { ref, inject } from 'vue'
export default {
  components: { StreamBarcodeReader },
  setup() {
    const store = inject('store')
    const $q = useQuasar()
    const barcode = ref(7896275960513)
    const item = ref(
      {
        barcode: '1234567890123',
        category: 'itens de teste',
        description: 'Vamo testar',
        title: 'Item teste',
        unit_price: 69,
        unit_measure: 'unit',
        weight: 10,
        quantity: 1
      }
    )

    const loadData = async () => {
    api
      .get(`/scan/store/${barcode.value}`)
      .then(response => {
        item.value = response.data
        showDetalhesItem()
      })
      .catch(er => {
        if (er.response.status === 404) {
          $q.notify({
            color: 'negative',
            position: 'top',
            message: 'O item escaneado não está na database',
            icon: 'report_problem'
          })
        } else {
          $q.notify({
            color: 'negative',
            position: 'top',
            message: 'Oops, algo deu errado!',
            icon: 'report_problem'
          })
        }
      })
    }
    const onDecode = (result) => {
      barcode.value = result
      loadData()
      console.log(result)
      $q.dialog({
        component: DetalhesItem,

        // props forwarded to your custom component
        componentProps: {
          title: item.value.title,
          unit_price: item.value.unit_price,
          weight: item.value.weight,
          description: item.value.description
          // ...more..props...
        }
      }).onOk(() => {
        store.methods.adicionarItem(item.value)
        console.log('OK')
      }).onCancel(() => {
        console.log('Cancel')
      }).onDismiss(() => {
        console.log('Called on OK or Cancel')
      })
    }

    const barcodeVai = () => {
      $q.dialog({
        component: DetalhesItem,

        // props forwarded to your custom component
        componentProps: {
          title: item.value.title,
          unit_price: item.value.unit_price,
          weight: item.value.weight,
          description: item.value.description
          // ...more..props...
        }
      }).onOk(() => {
        store.methods.adicionarItem(item.value)
        console.log('OK')
      }).onCancel(() => {
        console.log('Cancel')
      }).onDismiss(() => {
        console.log('Called on OK or Cancel')
      })
    }
    return {
      onDecode,
      barcodeVai
    }
  },
};
</script>
