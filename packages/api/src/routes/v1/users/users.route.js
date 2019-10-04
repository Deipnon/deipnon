import { Router } from 'express'
import { sampleMiddleware } from '../../../middlewares/v1/'

import userService from '../../../services/v1/users/users.service'

const router = Router()

/*
router.post('/hello', sampleMiddleware, async (req, res) => {
  const user = await userService.createUser(req.body)
  if (!userService.status) return res.status(400).send(user)
  return res.status(201).send(user)
})

router.get('/hello', sampleMiddleware, async (req, res) => {
  const user = await userService.getUser(req.body)
  if (!userService.status) return res.status(400).send(user)
  return res.status(201).send(user)
})
*/

export default router
