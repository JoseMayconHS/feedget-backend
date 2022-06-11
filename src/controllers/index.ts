import { Router } from 'express'

import { feedback } from './controls/feedback'

export const controllers = (router: Router) => {
  feedback(router)

  return router
}
