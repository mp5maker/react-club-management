import axios from './axios'

const apiHelper = {
  members: {
    getAll: () => axios.get('/api/v1/members'),
    get: ({ id }: { id: number }) => axios.get(`/api/v1/members/${id}`),
    remove: ({ id }: { id: number }) => axios.delete(`/api/v1/members/${id}`),
  },
}

export default apiHelper
