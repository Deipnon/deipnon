import { Router } from 'express'
import User from '../../models/Users'

const router = Router()

router.post('/', (req, res) => {
	const { firstName, lastName, email } = req.body

	User.create({
		firstName,
		lastName,
		email
	}).then(user => {
		res.send({
			status: true,
			data: user
		})
	}).catch(() => {
		res.status(500).send({
			status: false
		})
	})
})

router.get('/:id', (req, res) => {
	const { id } = req.params

	User.findById(id)
		.then(user => {
			res.send({
				status: true,
				data: user
			})
		})
		.catch(() => {
			res.status(500).send({
				status: false
			})
		})
})

export default router
