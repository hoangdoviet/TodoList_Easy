import Vue from 'vue'
import router from './router/router'
import vuetify from './plugins/vuetify'
import i18n from './plugins/i18n'
import store from './store'
import './plugins/filters'
import VueClipboard from 'vue-clipboard2'

import App from './App.vue'
VueClipboard.config.autoSetContainer = true
Vue.use(VueClipboard)

Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
