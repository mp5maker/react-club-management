import express, { Request, Response } from 'express'
import multer from 'multer'
import path from 'path'
import { getMembers, createMember } from './members'

const storage = multer.diskStorage({
  destination: function(_req, _file, cb) {
    cb(null, path.join('..', '..', 'public/members'))
  },
  filename: function(_req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9)
    cb(null, file.fieldname + '-' + uniqueSuffix)
  }
})
const upload = multer({ storage  })

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

router.get('/members', getMembers)
router.post('/members', upload.single('profile_photo'), createMember)

export default router
