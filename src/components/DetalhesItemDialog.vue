<template>
  <!-- notice dialogRef here -->
  <q-dialog ref="dialogRef" @hide="onDialogHide">
    <q-card class="q-dialog-plugin q-pa-sm">
      <!--
        ...content
        ... use q-card-section for it?
      -->
      <q-card-section class="">
        <div class="text-h5">
          {{title}}
        </div>
        <div class="text-h6">
          R$ {{price}}
        </div>
        <div class="text-subtitle1 text-grey-9">
          {{brand}}
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
          @click="onOKClick()"
        />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script>
import { useDialogPluginComponent } from 'quasar'

export default {
  props: {
    barcode: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true,
      default: ''
    },
    brand: {
      type: String,
      required: false
    },
    price: {
      type: Number,
      required: true
    },
    adicionar: {
      type: Function,
      required: true
    }
  },

  emits: [
    ...useDialogPluginComponent.emits
  ],

  setup (props) {
    const { dialogRef, onDialogHide, onDialogOK, onDialogCancel } = useDialogPluginComponent()

    // console.log('this store: ', props.adicionar )

    const onOKClick = () => {
      props.adicionar(
        {
          barcode: props.barcode,
          title: props.title,
          brand: props.brand,
          price: props.price,
          quantity: 1
        }, // item_viewer
      )
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
