import { Request, Response } from 'express'

const getMembers = async (_req: Request, res: Response) => {
  return res.status(200).json({
    message: [
      {
        data: 'More members',
      },
    ],
  })
}

export { getMembers }
