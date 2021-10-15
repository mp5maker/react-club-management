import { IMembers } from '../members'
import { ISchedules } from '../schedules'
import axios from './axios'

const apiHelper = {
  members: {
    getAll: () => axios.get('/members'),
    get: ({ id }: { id: string }) => axios.get(`/members/${id}`),
    remove: ({ id }: { id: string }) => axios.delete(`/members/${id}`),
    create: ({ body }: { body: Partial<IMembers> }) =>
      axios.post(`/members`, body),
    update: ({ id, body }: { id: string; body: Partial<IMembers> }) =>
      axios.patch(`/members/${id}`, body),
  },
  schedules: {
    getAll: () => axios.get('/schedules'),
    get: ({ id }: { id: string }) => axios.get(`/schedules/${id}`),
    remove: ({ id }: { id: string }) => axios.delete(`/schedules/${id}`),
    create: ({ body }: { body: Partial<ISchedules> }) =>
      axios.post(`/api/v1/schedules`, body),
    update: ({ id, body }: { id: string; body: Partial<ISchedules> }) =>
      axios.patch(`/api/v1/schedules/${id}`, body),
  },
}

export default apiHelper
