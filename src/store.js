import Vue from 'vue'
import Vuex from 'vuex'

import genres from './store/modules/genres'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    genres
  }
})
