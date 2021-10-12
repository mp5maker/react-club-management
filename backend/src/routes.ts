import express, { Request, Response } from 'express'
import { getMembers } from './members'

const router = express.Router()

router.get('/', (_req: Request, res: Response) => {
  return res.status(200).json({
    message: [
      {
        data: 'Ok, I am here',
      },
    ],
  })
})

router.get('/members', getMembers)

export default router
