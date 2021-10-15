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

const createSchedules= async (req: Request, res: Response) => {
  const body = get(req, 'body', {})

  await apiHelper.schedules.create({
    body
  })

  return res.status(201).json({
    mesasge: 'DATA_CREATED_SUCCESSFULLY',
  })
}

export { getSchedules, createSchedules }
