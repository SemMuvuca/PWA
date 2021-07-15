import { http } from "../boot/axios"

export default class ScannerService {
  constructor (path = '') {
    this.path = path,
    this.http = http
  }

  getItem = async (barcode) => {
    try {
      const response = await this.http.get(`${this.path}/${barcode}`)
      return response.data

    } catch (er) {

      if (er.response.status === 404) {
        throw new Error('Produto não encontrado !')

      } else {
        throw new Error('Algo deu errado !')

      }
    }
  }
}

// https://github.com/typicode/json-server
