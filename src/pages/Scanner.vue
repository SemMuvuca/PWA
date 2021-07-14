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
import { useQuasar } from 'quasar'
import { StreamBarcodeReader } from "vue-barcode-reader"
import { buscarItem } from '../services/services'

export default {
  components: { StreamBarcodeReader },
  setup() {
    const $q = useQuasar()

    const onDecode = async (result) => {
      await buscarItem(result)
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

    return {
      onDecode
    }
  },
};
</script>
