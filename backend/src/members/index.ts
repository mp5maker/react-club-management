import { Request, Response } from 'express'
import get from 'lodash/get'
import apiHelper from '../api/apiHelper'
import path from 'path'
import fs from 'fs'

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

const createMember = async(req: Request, res: Response) => {
  const handleError = (error: any, res: any) =>  res.status(500).json({ data: 'Image could not be uploaded properly '})

  //  Uploading Imaging
  const temporaryPath = get(req, 'profile_photo.path', '')
  const fileName = get(req, 'profile_photo.name', '')
  const targetPath = path.join('..', '..', `public/members/${fileName}`)
  const originalName = get(req, 'profile_photo.originalname').toLowerCase()
  if (['.png', '.jpg', '.jpeg'].includes(path.extname(originalName))) {
    fs.rename(temporaryPath, targetPath, (error) => {
      if (error) return handleError(error, res)
      return res.status(201)
        .json({
          data: "Data created successfull"
        })
    })
  }
}

export { getMembers, createMember }
