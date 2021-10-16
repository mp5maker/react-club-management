import { NextFunction, Request, Response } from 'express'

const responseHelper = {
  error: {
    logger: (error: any, _req: Request, _res: Response, next: NextFunction) => {
      console.error(error)
      next(error)
    },
    response: (
      error: any,
      _req: Request,
      res: Response,
      _next: NextFunction
    ) => {
      res.header('Content-Type', 'application/json')
      res.status(error.statusCode).send(JSON.stringify(error, null, 4))
    },
    notFound: ({ res, message }: { res: Response; message: string }) =>
      res.status(404).json({ message }),
    internalServerError: ({ res }: { res: Response }) =>
      res.status(500).json({ message: 'INTERNAL_SERVER_ERROR' }),
  },
}

export default responseHelper
