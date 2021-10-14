import axios from './axios'

const apiHelper = {
  members: {
    getAll: () => axios.get('/api/v1/members'),
    get: ({ id }: { id: number }) => axios.get(`/api/v1/members/${id}`),
    remove: ({ id }: { id: number }) => axios.delete(`/api/v1/members/${id}`),
    create: ({ body }: { body: Partial<IMembers> }) =>
      axios.post(`/api/v1/members`, body),
    update: ({ id, body }: { id: number; body: Partial<IMembers> }) =>
      axios.patch(`/api/v1/members/${id}`, body),
  },
}

export default apiHelper
