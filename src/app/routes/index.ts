import { Router } from 'express'
import { UserRoutes } from '../modules/user/user.routes'

export const middlewareRouters = Router()

const routers = [
  {
    route: '/users',
    pathName: UserRoutes,
  },
]

routers.forEach(route => middlewareRouters.use(route.route, route.pathName))
