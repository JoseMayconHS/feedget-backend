import express from 'express'

import { controllers } from './controllers'

export const routes = express.Router()

controllers(routes)
