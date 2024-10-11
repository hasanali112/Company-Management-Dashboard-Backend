import express, { Application, Request, Response } from 'express'
import cors from 'cors'
import httpStatus from 'http-status'
import { middlewareRouters } from './app/routes'
import notFound from './app/middleware/notFound'
const app: Application = express()

app.use(express.json())
app.use(cors())

app.use('/api/v1', middlewareRouters)

app.get('/', (req: Request, res: Response) => {
  res.status(httpStatus.OK).json({
    success: true,
    message: 'Welcome to the company management app',
  })
})

app.use(notFound)

export default app
