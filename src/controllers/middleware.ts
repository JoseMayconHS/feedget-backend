import { Application, json } from 'express'
import cors from 'cors'

import { routes } from '../routes'

export const middleware = (app: Application) => {
  app.use(cors())
  app.use(json())
  app.use(routes)
}
