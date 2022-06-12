import express from 'express'

import { middleware } from './controllers/middleware'

const app = express()

middleware(app)

export {
  app
}
