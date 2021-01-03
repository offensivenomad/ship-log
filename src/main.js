import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@fortawesome/fontawesome-free/css/all.css'
import vSelect from 'vue-select'
import 'vue-select/dist/vue-select.css'

Vue.config.productionTip = false

Vue.component('v-select', vSelect)

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
