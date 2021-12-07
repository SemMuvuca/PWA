<template>
  <div id="q-app" class="full-width row justify-center items-center q-pt-lg">
    <StreamBarcodeReader class="q-ma-md" @decode="onDecode" />
    <div class="q-pa-md q-gutter-md text-center">
      <div class="text-h5">Adicione itens ao carrinho</div>
      <div class="text-subtitle1">
        Direcione a sua câmera ao código de barra do produto selecionado.
      </div>
    </div>
  </div>
</template>

<script>
import { inject } from "vue";
import { useQuasar } from "quasar";
import { StreamBarcodeReader } from "vue-barcode-reader";

import ScannerService from "../services/Scanner.service";

import DetalhesItemDialog from "components/DetalhesItemDialog";

export default {
  components: { StreamBarcodeReader },
  setup() {
    const $q = useQuasar();
    const scanService = new ScannerService();
    const store = inject("store");
    const onDecode = async (result) => {
      try {
        let payload = await scanService.getItem(result);
        $q.dialog({
          component: DetalhesItemDialog,
          componentProps: {
            code: payload[0].code,
            title: payload[0].product_name,
            price: payload[0].price,
            brand: payload[0].brand,
            adicionar: store.methods.adicionarItem,
          },
        })
          .onOk(() => {
            $q.notify({
              color: "green",
              position: "top",
              message: "Item adicionado no carrinho",
              icon: "add_shopping_cart",
            });
          })
          .onCancel(() => {
            $q.notify({
              color: "red",
              position: "top",
              message: "Item não adicionado no carrinho",
              icon: "remove_shopping_cart",
            });
          })
          .onDismiss(() => {
            // console.log('Called on OK or Cancel')
          });
      } catch (er) {
        $q.notify({
          color: "negative",
          position: "top",
          message: er.message,
          icon: "report_problem",
        });
      }
    };
    onDecode("37298374923");
    return {
      onDecode,
    };
  },
};
</script>
