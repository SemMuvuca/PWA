<template>
  <div id="q-app" class="full-width row justify-center items-center q-pt-lg">
    <StreamBarcodeReader @decode="onDecode"></StreamBarcodeReader>
    <div class="q-pa-md q-gutter-md">
      <h6>Adicione itens ao carrinho</h6>
      <p>Direcione a sua câmera ao código de barra do produto selecionado</p>
    </div>

  </div>
</template>

<script>
import { useQuasar } from "quasar";
import { StreamBarcodeReader } from "vue-barcode-reader";
import  ScannerService  from "../services/Scanner.service";

import DetalhesItemDialog from '../components/DetalhesItemDialog.vue'

export default {
  components: { StreamBarcodeReader },
  setup() {
    const $q = useQuasar();
    const scanService = new ScannerService()

    const onDecode = async (result) => {
      try {
        let payload = await scanService.getItem(result);
        $q.dialog({
          component: DetalhesItemDialog,
          componentProps: {
            title: payload.title,
            unit_price: payload.unit_price,
            description: payload.description
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

    return {
      onDecode
    }
  },
};
</script>
