import { IMembers } from '../members'
import axios from './axios'

const apiHelper = {
  members: {
    getAll: () => axios.get('/members'),
    get: ({ id }: { id: number }) => axios.get(`/members/${id}`),
    remove: ({ id }: { id: number }) => axios.delete(`/members/${id}`),
    create: ({ body }: { body: Partial<IMembers> }) =>
      axios.post(`/members`, body),
    update: ({ id, body }: { id: number; body: Partial<IMembers> }) =>
      axios.patch(`/members/${id}`, body),
  },
}

export default apiHelper
