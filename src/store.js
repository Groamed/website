import Vue from 'vue'
import Vuex from 'vuex'

import genres from './store/modules/genres'
import users from './store/modules/users'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    genres,
    users
  }
})
