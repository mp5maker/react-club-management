import defaultAxios from 'axios'
import { BACKEND } from '../constants/settings'

const axios = defaultAxios.create({
  baseURL:  BACKEND.URI
})

export default axios