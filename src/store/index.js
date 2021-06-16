import { reactive, readonly } from 'vue'

const state = reactive({
  counter: 0,
  colorCode: 'blue',
  items: [{
    barcode: '7891991000833',
    category: 'não pereciveis',
    description: 'Isso é nescau',
    title: 'Nescau',
    unit_price: 100,
    unit_measure: 'unit',
    weight: 10,
    quantity: 1
  },
  {
    barcode: '7894900940398',
    category: 'não pereciveis',
    description: 'O guaraná divino',
    title: 'Guaraná Jesus',
    unit_price: 10,
    unit_measure: 'unit',
    weight: 10,
    quantity: 1
  }
]
})

const methods = {
  increaseCounter () {
    state.counter++
  },
  decreaseCounter () {
    state.counter--
  },
  setColorCode (val) {
    state.colorCode = val
  },
  aumentarQuantidade (index) {
    state.items[index].quantity++
  },
  diminuirQuantidade (index) {
    if (state.items[index].quantity > 0) {
      state.items[index].quantity--
    }
    if (state.items[index].quantity === 0) {
      for (let i = 0; i < state.items.length; i++) {
        if (state.items[i] === state.items[index]) {
          state.items.splice(i, 1)
        }
      }
    }
  }
}

const getters = {
  counterSquared () {
    return state.counter * state.counter
  },
  totalPrice () {
    let sum = 0
      for (let i = 0; i < state.items.length; i++) {
        sum += state.items[i].unit_price * state.items[i].quantity
      }
    return sum
  }
}

export default {
  state: readonly(state),
  methods,
  getters
}
