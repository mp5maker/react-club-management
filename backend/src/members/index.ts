import { Request, Response } from 'express'
import apiHelper from '../api/apiHelper'
import get from 'lodash/get'

const getMembers = async (_req: Request, res: Response) => {
  const members = await apiHelper.members.getAll()
  const data = get(members, 'data', [])
  return res.status(200).json(data)
}

export { getMembers }
