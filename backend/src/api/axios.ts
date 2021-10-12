import defaultAxios from 'axios'
import { DATABASE } from '../constants/settings'

const axios = defaultAxios.create({
  baseURL: DATABASE.URI,
})

export default axios