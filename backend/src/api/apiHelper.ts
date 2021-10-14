import axios from './axios'

const apiHelper = {
  members: {
    getAll: () => axios.get('/members'),
    get: ({ id }: { id: number }) => axios.get(`/members/${id}`),
    remove: ({ id }: { id: number }) => axios.delete(`/members/${id}`)
  },
}

export default apiHelper
