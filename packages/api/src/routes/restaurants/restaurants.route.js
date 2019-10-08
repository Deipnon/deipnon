import { Router } from 'express'
import Restaurant from '../../models/Restaurants'

const router = Router()

router.get('/:id', (req, res) => {
	const { id } = req.params

	Restaurant.findById(id)
		.then(restaurant => {
			res.json({
				status: true,
				data: restaurant
			})
		})
		.catch(() => {
			res.status(500).json({
				status: false,
				data: null
			})
		})
})

router.post('/', (req, res) => {
	const { name } = req.body

	Restaurant.create({
		restaurantName: name
	})
		.then(restaurant => {
			res.json({
				status: true,
				data: restaurant
			})
		})
		.catch(() => {
			res.status(500).json({
				status: false
			})
		})
})

router.put('/:id', (req, res) => {
	const { id } = req.params
	const { name } = req.body

	Restaurant.findByIdAndUpdate(id, {
		restaurantName: name
	})
		.then(restaurant => {
			res.json({
				status: true,
				data: restaurant
			})
		})
		.catch(() => {
			res.status(422).json({
				status: false
			})
		})
})

router.delete('/:id', (req, res) => {
	const { id } = req.params

	Restaurant.findByIdAndDelete(id)
		.then(() => {
			res.json({
				status: true
			})
		})
		.catch(() => {
			res.status(500).json({
				status: false
			})
		})
})

export default router
