import { USER as mutation } from '../types/mutations'
import * as api from '../../api/users'

const state = {
  user: {},

  loadings: { register: false },

  errors: { register: [] }
}

const mutations = {
  [mutation.FETCH_REGISTER]: state => {
    state.loadings.register = true
  },
  [mutation.FETCH_REGISTER_SUCCESS]: (state, { user }) => {
    state.loadings.register = false
    state.user = user
  },
  [mutation.FETCH_REGISTER_FAIL]: (state, errors) => {
    state.loadings.register = false
    state.errors.register = errors
  }
}

const actions = {
  fetchRegister: ({ commit }, params) =>
    api
      .fetchGenres(params)
      .then(({ data }) =>
        commit(mutation.FETCH_GENRES_SUCCESS, { genres: data })
      )
      .catch(error => commit(mutation.FETCH_GENRES_FAIL, error))
}

export default {
  state,
  mutations,
  actions,
  namespaced: true
}
