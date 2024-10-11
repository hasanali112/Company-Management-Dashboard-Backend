/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import httpStatus from 'http-status'
import { UserService } from './user.service'
import { RequestHandler } from 'express'
import sendResponseHandle from '../../utils/sendResponseHandle'

const createUserIntoDB: RequestHandler = async (req, res, next) => {
  try {
    const result = await UserService.createUser(req.body)

    sendResponseHandle(res, {
      success: true,
      message: 'User created successfully',
      data: result,
    })
  } catch (error: any) {
    res.status(httpStatus.BAD_REQUEST).json({
      success: false,
      message: error.message,
      error: error,
    })
  }
}

export const UserController = {
  createUserIntoDB,
}
