import { reactive, readonly } from 'vue'

const state = reactive({
  // mp: new window.MercadoPago('TEST-e5cf1519-a8c0-44d6-ba2d-8e05cdbe44c6', {
  //     locale: 'pt-BR'
  //   }),
  counter: 0,
  colorCode: 'blue',
  viewer_product_list: [
    {
      title: 'Nescau',
      brand: "Nestle 1nc.",
      price: 100,
      quantity: 1
    },
    {
      title: 'Guaraná Jesus',
      brand: "Planeta 1nc.",
      price: 10,
      quantity: 1
    }
  ],
  server_product_list: [
    {
      barcode: '7891991000833',
      quantity: 1
    },
    {
      barcode: '7894900940398',
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
    state.viewer_product_list[index].quantity++
    state.server_product_list[index].quantity++
    // console.log('quantity de viewer: ', state.viewer_product_list[index].quantity)
    // console.log('quantity de server: ', state.server_product_list[index].quantity)
    // console.log("viewer: ", state.viewer_product_list, "server: ", state.server_product_list)
  },
  diminuirQuantidade (index) {
    if (state.viewer_product_list[index].quantity > 0) {
      state.server_product_list[index].quantity--
      state.viewer_product_list[index].quantity--
    }
    // console.log('quantity de viewer: ', state.viewer_product_list[index].quantity)
    // console.log('quantity de server: ', state.server_product_list[index].quantity)
    if (state.viewer_product_list[index].quantity === 0) {
      state.viewer_product_list.map((element, i) => {
        if (element === state.viewer_product_list[index]) {
          state.viewer_product_list.splice(i, 1)
          state.server_product_list.splice(i, 1)
        }
      })
    }
    // console.log("viewer: ", state.viewer_product_list, "server: ", state.server_product_list)
  },
  adicionarItem (item_viewer, item_server) {
    let adicionado = false
    state.server_product_list.every(element => {
      if (element.barcode === item_server.barcode) {
        element.quantity++
        adicionado = true
        return false
      }
      return true
    })
    if (!adicionado) {
      state.viewer_product_list.push(item_viewer)
      state.server_product_list.push(item_server)
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
