import { Request, Response } from 'express'
import fs from 'fs'
import get from 'lodash/get'
import path from 'path'
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
  const handleError = (error: any, res: any) =>
    res.status(500).json({ message: 'IMAGE_COULD_NOT_BE_DELETED_PROPERLY' })

  //  Uploading Imaging
  const temporaryPath = get(req, 'profile_photo.path', '')
  const fileName = get(req, 'profile_photo.name', '')
  const targetPath = path.join('..', '..', `public/members/${fileName}`)
  const originalName = get(req, 'profile_photo.originalname').toLowerCase()
  if (['.png', '.jpg', '.jpeg'].includes(path.extname(originalName))) {
    fs.rename(temporaryPath, targetPath, (error) => {
      if (error) return handleError(error, res)
      return res.status(201).json({
        mesasge: 'DATA_CREATED_SUCCESSFULLY',
      })
    })
  }
}

export { getMembers, getMember, createMember, deleteMember }
