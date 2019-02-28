import { GENRES as mutation } from '../types/mutations'
import * as api from '../../api/genres'

const state = {
  genres: [],
  genre: {},

  loadings: { genre: true, genres: true },
  errors: []
}

const mutations = {
  [mutation.FETCH_GENRES]: state => {
    state.loadings.genres = true
  },
  [mutation.FETCH_GENRES_SUCCESS]: (state, { genres }) => {
    state.loadings.genres = false
    state.genres = genres
  },
  [mutation.FETCH_GENRE_FAIL]: (state, error) => {
    state.loadings.genres = false
    state.errors = error
  },

  [mutation.FETCH_GENRE]: state => {
    state.loadings.genre = true
  },
  [mutation.FETCH_GENRE_SUCCESS]: (state, genre) => {
    state.loadings.genre = false
    state.genre = genre
  },
  [mutation.FETCH_GENRE_FAIL]: (state, error) => {
    state.loadings.genre = false
    state.errors = error
  }
}

const actions = {
  fetchGenres: ({ commit }, params) =>
    api
      .fetchGenres(params)
      .then(({ data }) =>
        commit(mutation.FETCH_GENRES_SUCCESS, { genres: data })
      )
      .catch(error => commit(mutation.FETCH_GENRES_FAIL, error)),

  fetchGenreByName: ({ commit }, name) =>
    api
      .fetchGenreByName(name)
      .then(({ data }) => commit(mutation.FETCH_GENRE_SUCCESS, data))
      .catch(error => commit(mutation.FETCH_GENRE_FAIL, error)),

  fetchGenreById: ({ commit }, id) =>
    api
      .fetchGenreById(id)
      .then(({ data }) => commit(mutation.FETCH_GENRE_SUCCESS, data))
      .catch(error => commit(mutation.FETCH_GENRE_FAIL, error))
}

export default {
  state,
  mutations,
  actions,
  namespaced: true
}
