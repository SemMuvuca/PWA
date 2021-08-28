<template>
  <!-- notice dialogRef here -->
  <q-dialog ref="dialogRef" @hide="onDialogHide">
    <q-card class="q-dialog-plugin q-pa-md">
      <q-card-section class="">
        <div class="text-h6 text-center">Por favor, selecione uma forma de pagamento</div>
      </q-card-section>
      <q-card-actions vertical>
        <q-btn
          v-close-popup
          color="green"
          label="Cartão de crédito"
          class="q-my-sm"
          to="/pagamento/checkout"
        />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script>
import { useDialogPluginComponent } from 'quasar'

export default {
  props: {
  },

  emits: [
    ...useDialogPluginComponent.emits
  ],

  setup (props) {
    const { dialogRef, onDialogHide, onDialogOK, onDialogCancel } = useDialogPluginComponent()

    const onOKClick = () => {

      console.log('entrou')

      // route().push('pagamento/checkout')

      onDialogOK ()
    }

    return {
      dialogRef,
      onDialogHide,
      onOKClick,
      onCancelClick: onDialogCancel
    }
  }
}
</script>
