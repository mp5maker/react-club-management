import axios from './axios'

const apiHelper = {
  members: {
    getAll: () => axios.get('/members'),
  },
}

export default apiHelper
