import { Request, Response } from 'express'
import get from 'lodash/get'
import apiHelper from '../api/apiHelper'

export interface ISchedules {
  id: string
  date: string
  start_time: string
  end_time: string
  member_id: string
  title?: string
  description?: string
}

const getSchedules = async (_req: Request, res: Response) => {
  const schedules = await apiHelper.schedules.getAll()
  const data: Array<ISchedules> = get(schedules, 'data', [])
  return res.status(200).json(data)
}

const createSchedule= async (req: Request, res: Response) => {
  const body = get(req, 'body', {})

  await apiHelper.schedules.create({
    body
  })

  return res.status(201).json({
    mesasge: 'DATA_CREATED_SUCCESSFULLY',
  })
}

const deleteSchedule = async (req: Request, res: Response) => {
  const id = get(req, 'params.id', '')
  if (id) {
    await apiHelper.schedules.remove({ id })
    return res.status(200).json({ message: 'SUCCESSFULLY_DELETED' })
  } else {
    return res.status(400).json({ message: 'MEMBER_CANNOT_BE_DELETED' })
  }
}


export { getSchedules, createSchedule, deleteSchedule }
