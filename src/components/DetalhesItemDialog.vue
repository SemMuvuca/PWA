<template>
  <!-- notice dialogRef here -->
  <q-dialog ref="dialogRef" @hide="onDialogHide">
    <q-card class="q-dialog-plugin">
      <!--
        ...content
        ... use q-card-section for it?
      -->
      <q-card-section class="q-pt-none">
        <div class="text-subtitle2">
          {{title}}
        </div>
        <div class="text-subtitle2">
          R$ {{unit_price}}
        </div>
        <div class="text-caption text-grey">
          {{description}}
        </div>
      </q-card-section>

      <q-card-actions align="around">
        <q-btn
          v-close-popup
          flat
          color="primary"
          round
          icon="cancel"
          label="Cancelar"
        />
        <q-btn
          v-close-popup
          flat
          color="primary"
          round
          icon="add_shopping_cart"
          label="Adicionar"
          @click="onOKClick(item)"
        />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script>
import { useDialogPluginComponent } from 'quasar'

export default {
  props: {
    // ...your custom props
    title: {
      type: String,
      required: true,
      default: ''
    },
    unit_price: {
      type: Number,
      required: false
    },
    description: {
      type: String,
      required: false
    }
  },

  emits: [
    // REQUIRED; need to specify some events that your
    // component will emit through useDialogPluginComponent()
    ...useDialogPluginComponent.emits
  ],

  setup () {
    // REQUIRED; must be called inside of setup()
    const { dialogRef, onDialogHide, onDialogOK, onDialogCancel } = useDialogPluginComponent()
    // dialogRef      - Vue ref to be applied to QDialog
    // onDialogHide   - Function to be used as handler for @hide on QDialog
    // onDialogOK     - Function to call to settle dialog with "ok" outcome
    //                    example: onDialogOK() - no payload
    //                    example: onDialogOK({ /*.../* }) - with payload
    // onDialogCancel - Function to call to settle dialog with "cancel" outcome

    return {
      // This is REQUIRED;
      // Need to inject these (from useDialogPluginComponent() call)
      // into the vue scope for the vue html template
      dialogRef,
      onDialogHide,

      // other methods that we used in our vue html template;
      // these are part of our example (so not required)
      onOKClick () {
        // on OK, it is REQUIRED to
        // call onDialogOK (with optional payload)
        onDialogOK()
        // or with payload: onDialogOK({ ... })
        // ...and it will also hide the dialog automatically
      },

      // we can passthrough onDialogCancel directly
      onCancelClick: onDialogCancel
    }
  }
}
</script>
