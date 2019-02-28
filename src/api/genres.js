import axios from 'axios'

import { API_URL } from '../constants'

// fetchGenres :: {take: Number, skip: Number} -> Promise
export const fetchGenres = async params =>
  await axios.get(`${API_URL}genres`, { ...params })

// fetchGenreByName :: String -> Promise
export const fetchGenreByName = async name =>
  await axios.get(`${API_URL}genres/by_name`, { name })

// fetchGenreById :: Number -> Promise
export const fetchGenreById = async id =>
  await axios.get(`${API_URL}genres/by_id`, { id })
