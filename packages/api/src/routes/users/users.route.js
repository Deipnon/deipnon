import { Router } from 'express'
import userService from '../../services/users/users.service'

const router = Router()

router.post('/', async (req, res) => {
	const user = await userService.createUser(req.body)
	if (!user.status) return res.status(400).send(user)
	return res.status(201).send(user)
})

router.get('/', async (req, res) => {
	const user = await userService.getUser(req.body)
	if (!user.status) return res.status(400).send(user)
	return res.status(201).send(user)
})

export default router
