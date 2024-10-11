import { Response } from 'express'
import httpStatus from 'http-status'

type TResponse<T> = {
  success: boolean
  message: string
  data: T
}

const sendResponseHandle = <T>(res: Response, data: TResponse<T>) => {
  return res.status(httpStatus.OK).json({
    success: data.success,
    message: data.message,
    data: data.data,
  })
}

export default sendResponseHandle
