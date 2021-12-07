<template>
  <q-card class="q-pa-sm q-mb-md">
    <q-item>
      <q-item-section
        top
        thumbnail
        class="q-ml-none"
      >
        <!-- <img src="https://cdn.quasar.dev/img/mountains.jpg"> -->
      </q-item-section>

      <q-item-section>
        <q-item-label>{{title}}</q-item-label>
        <q-item-label caption>R$ {{price}}</q-item-label>
      </q-item-section>

      <q-item-section
        bottom
        side
      >
        <div class="row q-gutter-sm justify-around text-grey-8">
          <q-btn
            flat
            dense
            round
            size="12px"
            icon="remove_circle_outline"
            class="col"
            @click="store.methods.diminuirQuantidade(index)"
          />
          <div class="col text-body1 text-center">{{quantidade}}</div>
          <q-btn
            flat
            dense
            round
            size="12px"
            icon="add_circle_outline"
            class="col"
            @click="store.methods.aumentarQuantidade(index)"
          />
        </div>
      </q-item-section>
    </q-item>
  </q-card>
</template>

<script>
import { inject } from 'vue'
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    price: {
      type: Number,
      required: true
    },
    quantidade: {
      type: Number,
      required: true
    },
    index: {
      type: Number,
      required: true
    }
  },
  setup() {
    const store = inject('store')

    return {
      store
    }
  },
}
</script>
