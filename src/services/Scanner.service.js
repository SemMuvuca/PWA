import { http } from "../boot/axios"

export default class ScannerService {
  constructor (path = '/produtos') {
    this.path = path,
    this.http = http
  }

  getItem = async (code) => {
    try {
      const response = await this.http.get(`${this.path}`, { params: { Filters: `code==${code}` } })
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
