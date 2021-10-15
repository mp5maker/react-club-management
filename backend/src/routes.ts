import express, { Request, Response } from 'express'
import multer from 'multer'
import path from 'path'
import {
  createMember,
  deleteMember,
  getMember,
  getMembers,
  updateMember
} from './members'
import { createSchedule, deleteSchedule, getSchedules } from './schedules'

const storage = multer.diskStorage({
  destination: function (_req, _file, cb) {
    cb(null, path.join(__dirname, '..', 'public/members'))
  },
  filename: function (_req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9)
    cb(null, file.fieldname + '-' + uniqueSuffix)
  },
})
const upload = multer({ storage })

const router = express.Router()

router.get('/', (_req: Request, res: Response) => {
  return res.status(200).json({
    message: [
      {
        data: 'Working',
      },
    ],
  })
})

// Members
router.get('/members', getMembers)
router.get('/members/:id', getMember)
router.post('/members', upload.single('profile_photo'), createMember)
router.delete('/members/:id', deleteMember)
router.patch('/members/:id', upload.single('profile_photo'), updateMember)


// Members
router.get('/schedules', getSchedules)
router.post('/schedules', createSchedule)
router.delete('/schedules/:id', deleteSchedule)

export default router
