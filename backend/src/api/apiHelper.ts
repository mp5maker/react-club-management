import axios from './axios'

const apiHelper = {
  members: {
    getAll: () => axios.get('/members'),
    remove: ({ id }: { id: number }) => axios.delete(`/members/${id}`)
  },
}

export default apiHelper
