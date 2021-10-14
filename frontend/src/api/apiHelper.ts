import axios from './axios'

const apiHelper = {
  members: {
    getAll: () => axios.get('/api/v1/members'),
    get: ({ id }: { id: string }) => axios.get(`/api/v1/members/${id}`),
    remove: ({ id }: { id: string }) => axios.delete(`/api/v1/members/${id}`),
    create: ({ body }: { body: Partial<IMembers> }) =>
      axios.post(`/api/v1/members`, body),
    update: ({ id, body }: { id: string; body: Partial<IMembers> }) =>
      axios.patch(`/api/v1/members/${id}`, body),
  },
}

export default apiHelper
