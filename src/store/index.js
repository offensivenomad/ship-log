import Vue from 'vue'
import Vuex from 'vuex'
import * as crew from '@/store/modules/crew.js'
import * as log from '@/store/modules/log.js'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    crew,
    log
  },
  state: {
    categories: [
      'maintenance',
      'racing',
      'training',
      'leisure',
      'commercial',
      'sponsorship',
      'community'
    ]
  }
})