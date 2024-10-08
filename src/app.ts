import express, { Application, Request, Response } from 'express'
import cors from 'cors'
import httpStatus from 'http-status'
const app: Application = express()

app.use(express.json())
app.use(cors())

app.get('/', (req: Request, res: Response) => {
  res.status(httpStatus.OK).json({
    success: true,
    message: 'Welcome to the company management app',
  })
})

export default app
