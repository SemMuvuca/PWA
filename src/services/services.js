import { Dialog } from 'quasar'
import { api } from "../boot/axios"

import DetalhesItemDialog from '../components/DetalhesItemDialog.vue'

const buscarItem = async (barcode) => {
  await api.get(`/${barcode}`)
    .then(response => {
      Dialog.create({
        component: DetalhesItemDialog,
        componentProps: {
          title: response.data.title,
          unit_price: response.data.unit_price,
          description: response.data.description
        }
      }).onOk(() => {
        console.log('OK')
      }).onCancel(() => {
        console.log('Cancel')
      }).onDismiss(() => {
        console.log('Called on OK or Cancel')
      })
    })
}

export {
  buscarItem
}

// https://github.com/typicode/json-server
