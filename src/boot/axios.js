import { boot } from 'quasar/wrappers'
import axios from 'axios'

// Be careful when using SSR for cross-request state pollution
// due to creating a Singleton instance here;
// If any client changes this (global) instance, it might be a
// good idea to move this instance creation inside of the
// "export default () => {}" function below (which runs individually
// for each client)
const http = axios.create({
  baseURL: 'http://localhost:3000/',
  contentType: 'application/json'
})

export default boot(({ app }) => {
  // for use inside Vue files (Options http) through this.$axios and this.$http

  app.config.globalProperties.$axios = axios
  // ^ ^ ^ this will allow you to use this.$axios (for Vue Options http form)
  //       so you won't necessarily have to import axios in each vue file

  app.config.globalProperties.$http = http
  // ^ ^ ^ this will allow you to use this.$http (for Vue Options http form)
  //       so you can easily perform requests against your app's http
})

export { http }
