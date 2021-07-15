import { api } from "../boot/axios"

const getItem = async (barcode) => {
  try {
    const response = await api.get(`/${barcode}`)
    return response.data
  } catch (er) {

    if (er.response.status === 404) {
      throw new Error('Produto não encontrado !')

    } else {
      throw new Error('Algo deu errado !')

    }
  }
}

export {
  getItem
}

// https://github.com/typicode/json-server
