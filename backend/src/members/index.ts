import { Request, Response } from 'express'
import get from 'lodash/get'
import apiHelper from '../api/apiHelper'

export interface IMembers {
  id: number
  name: string
  username: string
  email: string
  address: string
  phone: string
  website: string
  occupation: string
  profile_photo: { [x: string]: string }
}

const getMembers = async (_req: Request, res: Response) => {
  const members = await apiHelper.members.getAll()
  const data: Array<IMembers> = get(members, 'data', [])
  return res.status(200).json(data)
}

const getMember = async (req: Request, res: Response) => {
  const id = get(req, 'params.id', '')
  const members = await apiHelper.members.get({ id })
  const data = get(members, 'data', {})
  return res.status(200).json(data)
}

const deleteMember = async (req: Request, res: Response) => {
  const id = get(req, 'params.id', '')
  if (id) {
    await apiHelper.members.remove({ id })
    return res.status(200).json({ message: 'SUCCESSFULLY_DELETED' })
  } else {
    return res.status(400).json({ message: 'MEMBER_CANNOT_BE_DELETED' })
  }
}

const createMember = async (req: Request, res: Response) => {
  const body = get(req, 'body', {})
  const file = get(req, 'file', '')

  await apiHelper.members.create({
    body: {
      ...body,
      ...(file
        ? {
            profile_photo: file,
          }
        : {}),
    },
  })

  return res.status(201).json({
    mesasge: 'DATA_CREATED_SUCCESSFULLY',
  })
}

const updateMember = async (req: Request, res: Response) => {
  const body = get(req, 'body', {})
  const file = get(req, 'file', '')
  const id = get(body, 'id', '')

  const previousData = await apiHelper.members.get({ id })
  await apiHelper.members.update({
    id,
    body: {
      ...body,
      ...(file
        ? {
            profile_photo: file,
          }
        : {
            profile_photo: get(previousData, 'data.profile_photo', {}),
          }),
    },
  })

  return res.status(201).json({
    mesasge: 'DATE_UPDATED_SUCCESSFULLY',
  })
}

export { getMembers, getMember, createMember, deleteMember, updateMember }
