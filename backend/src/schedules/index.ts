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

const getSchedule = async (req: Request, res: Response) => {
  const id = get(req, 'params.id', '')
  const schedule = await apiHelper.schedules.get({ id })
  const data = get(schedule, 'data', {})
  return res.status(200).json(data)
}

const createSchedule = async (req: Request, res: Response) => {
  const body = get(req, 'body', {})

  await apiHelper.schedules.create({
    body,
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

const updateSchedule = async (req: Request, res: Response) => {
  const body = get(req, 'body', {})
  const id = get(body, 'id', '')
  console.log('body', body)

  await apiHelper.schedules.update({
    id,
    body,
  })

  return res.status(200).json({
    mesasge: 'DATA_UPDATED_SUCCESSFULLY',
  })
}

export {
  getSchedules,
  getSchedule,
  createSchedule,
  deleteSchedule,
  updateSchedule,
}
