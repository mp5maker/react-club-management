import { NextFunction, Request, Response } from 'express'
import get from 'lodash/get'
import apiHelper from '../api/apiHelper'
import responseHelper from '../utilties/responseHelper'

export interface ISchedules {
  id: string
  date: string
  start_time: string
  end_time: string
  member_id: string
  title?: string
  description?: string
}

const getSchedules = async (
  _req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const schedules = await apiHelper.schedules.getAll()
    const data: Array<ISchedules> = get(schedules, 'data', [])
    return res.status(200).json(data)
  } catch (error) {
    next(error)
  }
}

const getSchedule = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = get(req, 'params.id', '')
    const schedule = await apiHelper.schedules.get({ id })
    const data = get(schedule, 'data', {})
    return res.status(200).json(data)
  } catch (error) {
    next(error)
  }
}

const createSchedule = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const body = get(req, 'body', {})
    await apiHelper.schedules.create({
      body,
    })
    return res.status(201).json({
      mesasge: 'DATA_CREATED_SUCCESSFULLY',
    })
  } catch (error) {
    next(error)
  }
}

const deleteSchedule = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = get(req, 'params.id', '')
    if (id) {
      await apiHelper.schedules.remove({ id })
      return res.status(200).json({ message: 'SUCCESSFULLY_DELETED' })
    } else {
      return responseHelper.error.notFound({
        res,
        message: 'DATA_CANNOT_BE_CREATED',
      })
    }
  } catch (error) {
    next(error)
  }
}

const updateSchedule = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const body = get(req, 'body', {})
    const id = get(body, 'id', '')
    await apiHelper.schedules.update({
      id,
      body,
    })

    return res.status(200).json({
      mesasge: 'DATA_UPDATED_SUCCESSFULLY',
    })
  } catch (error) {
    next(error)
  }
}

export {
  getSchedules,
  getSchedule,
  createSchedule,
  deleteSchedule,
  updateSchedule,
}
