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
import { useQuasar } from "quasar";
import { StreamBarcodeReader } from "vue-barcode-reader";
import { getItem } from "../services/Scanner.service";

import DetalhesItemDialog from '../components/DetalhesItemDialog.vue'

export default {
  components: { StreamBarcodeReader },
  setup() {
    const $q = useQuasar();

    const onDecode = async (result) => {
      try {
        const teste = await getItem(result);
        $q.dialog({
          component: DetalhesItemDialog,
          componentProps: {
            title: teste.title,
            unit_price: teste.unit_price,
            description: teste.description
          }
        }).onOk(() => {
          console.log('OK')
        }).onCancel(() => {
          console.log('Cancel')
        }).onDismiss(() => {
          console.log('Called on OK or Cancel')
        })
      } catch (er) {
        $q.notify({
          color: 'negative',
          position: 'top',
          message: er.message,
          icon: 'report_problem'
        })
      }
    };

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
