import { Request, Response } from 'express'
import get from 'lodash/get'
import apiHelper from '../api/apiHelper'

interface IMembers {
  id: number
  name: string
  username: string
  email: string
  address: string
  phone: string
  website: string
  occupation: string
}

const getMembers = async(_req: Request, res: Response) => {
  const members = await apiHelper.members.getAll()
  const data: Array<IMembers> = get(members, 'data', [])
  return res.status(200).json(data)
}

export { getMembers }
