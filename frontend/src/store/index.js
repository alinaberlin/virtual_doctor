import Vue from 'vue'
import Vuex from 'vuex'

axios.defaults.baseURL = process.env.VUE_APP_BASE_URL
axios.default.withCredentials =true

Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {}
})
