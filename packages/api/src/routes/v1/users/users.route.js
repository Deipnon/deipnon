import { Router } from 'express'
import userService from '../../../services/v1/users/users.service'

const router = Router()

/*
	Ornek middleware kullanimi.
	router.post('/example', sampleMiddleware, async (req, res) => ...
*/

router.post('/user', async (req, res) => {
  const user = await userService.createUser(req.body)
  if (!user.status) return res.status(400).send(user)
  return res.status(201).send(user)
})

router.get('/user', async (req, res) => {
  const user = await userService.getUser(req.body)
  if (!user.status) return res.status(400).send(user)
  return res.status(201).send(user)
})

export default router
