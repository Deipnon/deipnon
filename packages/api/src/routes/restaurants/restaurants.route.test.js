import 'babel-polyfill'
import request from 'supertest'
import app from '../../app'
import Restaurant from '../../models/Restaurants'
import { Types } from 'mongoose'

describe('[API] Restaurant Endpoints', () => {
	describe('[GET] /v1/restaurant/:id', () => {
		let restaurant

		beforeAll(() => {
			restaurant = Restaurant({
				restaurantName: 'Mock Restaurant'
			})
		})

		it('should get restaurant', () => {
			request(app)
				.get(`/v1/restaurant/${restaurant.id}`)
				.expect(200, {
					status: true,
					data: {
						name: restaurant.restaurantName
					}
				})
		})

		it('shouldnt get restaurant', () => {
			request(app)
				.get(`/v1/restaurant/${Types.ObjectId()}`)
				.expect(500, {
					status: false
				})
		})
	})

	describe('[POST] /v1/restaurant', () => {
		let restaurant

		beforeAll(() => {
			restaurant = {
				name: 'Mock Restaurant'
			}
		})

		it('should create restaurant', () => {
			request(app)
				.post('/v1/restaurant')
				.send({
					name: restaurant.name
				})
				.set('Accept', 'application/json')
				.expect(200, {
					status: true,
					data: {
						name: restaurant.name
					}
				})
		})

		it('shouldnt create restaurant', () => {
			request(app)
				.post('/v1/restaurant')
				.send({})
				.expect(500, {
					status: false
				})
		})
	})

	describe('[PUT] /v1/restaurant/:id', () => {
		let restaurant

		beforeAll(() => {
			restaurant = Restaurant({
				restaurantName: 'Mock Restaurant'
			})
		})

		it('should update restaurant', () => {
			request(app)
				.put(`/v1/restaurant/${restaurant.id}`)
				.send({
					name: restaurant.restaurantName
				})
				.set('Accept', 'application/json')
				.expect(200, {
					status: true,
					data: {
						name: restaurant.restaurantName
					}
				})
		})

		it('should update restaurant', () => {
			request(app)
				.put(`/v1/restaurant/${restaurant.id}`)
				.send({})
				.set('Accept', 'application/json')
				.expect(422, {
					status: true,
					data: {
						name: restaurant.restaurantName
					}
				})
		})
	})

	describe('[DELETE] /v1/restaurant/:id', () => {
		let restaurant

		beforeAll(() => {
			restaurant = Restaurant({
				restaurantName: 'Mock Restaurant'
			})
		})

		it('should delete restaurant', () => {
			request(app)
				.delete(`/v1/restaurant/${restaurant.id}`)
				.expect(200, {
					status: true
				})
		})

		it('shouldnt delete restaurant', () => {
			request(app)
				.delete(`/v1/restaurant/${Types.ObjectId()}`)
				.expect(500, {
					status: false
				})
		})
	})
})
