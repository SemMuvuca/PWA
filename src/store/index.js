import { reactive, readonly } from 'vue'

const state = reactive({
  viewer_product_list: [
    {
      barcode: '7891991000833',
      title: 'Nescau',
      brand: "Nestle 1nc.",
      price: 8.15,
      quantity: 1
    },
    // {
    //   barcode: '7894900940398',
    //   title: 'Guaraná Jesus',
    //   brand: "Planeta 1nc.",
    //   price: 10,
    //   quantity: 1
    // }
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
    state.viewer_product_list[index].quantity++
    console.log('quantity de viewer: ', state.viewer_product_list)
  },
  diminuirQuantidade (index) {
    if (state.viewer_product_list[index].quantity > 0) {
      state.viewer_product_list[index].quantity--
    }
    if (state.viewer_product_list[index].quantity === 0) {
      state.viewer_product_list.map((element, i) => {
        if (element === state.viewer_product_list[index]) {
          state.viewer_product_list.splice(i, 1)
        }
      })
    }
  },
  adicionarItem (item_viewer) {
    let adicionado = false
    state.viewer_product_list.every(element => {
      if (element.barcode === item_viewer.barcode) {
        element.quantity++
        adicionado = true
        return false
      }
      return true
    })
    if (!adicionado) {
      state.viewer_product_list.push(item_viewer)
    }
  }
}

const getters = {
  counterSquared () {
    return state.counter * state.counter
  },
  totalPrice () {
    let sum = 0
      for (let i = 0; i < state.viewer_product_list.length; i++) {
        sum += state.viewer_product_list[i].price * state.viewer_product_list[i].quantity
      }
    return sum
  }
}

export default {
  state: readonly(state),
  methods,
  getters
}
