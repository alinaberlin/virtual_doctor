import Vue from 'vue'
import vuetify from '@/plugins/vuetify' // path to vuetify export
import App from './app.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
