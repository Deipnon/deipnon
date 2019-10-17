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
				name: 'Mock Restaurant',
				phone: '05123123123',
				email: 'mock@restaurant.test',
				address: {
					addressLine: '415 Boston Post Rd',
					zipCode: '06460',
					city: 'Milford',
					state: 'CT'
				}
			})
		})

		it('should get restaurant', () => {
			request(app)
				.get(`/v1/restaurant/${restaurant.id}`)
				.expect(200, {
					status: true,
					data: {
						name: restaurant.name,
						phone: restaurant.phone,
						email: restaurant.email,
						address: {
							addressLine: restaurant.address.addressLine,
							zipCode: restaurant.address.zipCode,
							city: restaurant.address.city,
							state: restaurant.address.state
						}
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
				name: 'Mock Restaurant',
				phone: '05123123123',
				email: 'mock@restaurant.test',
				address: {
					addressLine: '415 Boston Post Rd',
					zipCode: '06460',
					city: 'Milford',
					state: 'CT'
				}
			}
		})

		it('should create restaurant', () => {
			request(app)
				.post('/v1/restaurant')
				.send({
					name: restaurant.name,
					phone: restaurant.phone,
					email: restaurant.email,
					address: {
						addressLine: restaurant.address.addressLine,
						zipCode: restaurant.address.zipCode,
						city: restaurant.address.city,
						state: restaurant.address.state
					}
				})
				.set('Accept', 'application/json')
				.expect(200, {
					status: true,
					data: {
						name: restaurant.name,
						phone: restaurant.phone,
						email: restaurant.email,
						address: {
							addressLine: restaurant.address.addressLine,
							zipCode: restaurant.address.zipCode,
							city: restaurant.address.city,
							state: restaurant.address.state
						}
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
				name: 'Mock Restaurant',
				phone: '05123123123',
				email: 'mock@restaurant.test',
				address: {
					addressLine: '415 Boston Post Rd',
					zipCode: '06460',
					city: 'Milford',
					state: 'CT'
				}
			})
		})

		it('should update restaurant', () => {
			request(app)
				.put(`/v1/restaurant/${restaurant.id}`)
				.send({
					name: restaurant.name,
					phone: restaurant.phone,
					email: restaurant.email,
					address: {
						addressLine: restaurant.address.addressLine,
						zipCode: restaurant.address.zipCode,
						city: restaurant.address.city,
						state: restaurant.address.state
					}
				})
				.set('Accept', 'application/json')
				.expect(200, {
					status: true,
					data: {
						name: restaurant.name,
						phone: restaurant.phone,
						email: restaurant.email,
						address: {
							addressLine: restaurant.address.addressLine,
							zipCode: restaurant.address.zipCode,
							city: restaurant.address.city,
							state: restaurant.address.state
						}
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
						name: restaurant.name,
						phone: restaurant.phone,
						email: restaurant.email,
						address: {
							addressLine: restaurant.address.addressLine,
							zipCode: restaurant.address.zipCode,
							city: restaurant.address.city,
							state: restaurant.address.state
						}
					}
				})
		})
	})

	describe('[DELETE] /v1/restaurant/:id', () => {
		let restaurant

		beforeAll(() => {
			restaurant = Restaurant({
				name: 'Mock Restaurant',
				phone: '05123123123',
				email: 'mock@restaurant.test',
				address: {
					addressLine: '415 Boston Post Rd',
					zipCode: '06460',
					city: 'Milford',
					state: 'CT'
				}
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
