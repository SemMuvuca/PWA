<template>
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
      <q-item-label caption>R$ {{unit_price}}</q-item-label>
    </q-item-section>

    <q-item-section
      bottom
      side
    >
      <div class="text-grey-8 q-gutter-xs row justify-right">
        <q-btn
          size="12px"
          flat
          dense
          round
          icon="remove_circle_outline"
          @click="store.methods.diminuirQuantidade(index)"
        />
        <span>{{quantity}}</span>
        <q-btn
          size="12px"
          flat
          dense
          round
          icon="add_circle_outline"
          @click="store.methods.aumentarQuantidade(index)"
        />
      </div>
    </q-item-section>
  </q-item>
</template>

<script>
import { inject } from 'vue'
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    unit_price: {
      type: Number,
      required: true
    },
    quantity: {
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
      store,
    }
  },
}
</script>
