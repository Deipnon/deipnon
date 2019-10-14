import 'babel-polyfill'
import request from 'supertest'
import app from '../../app'
import User from '../../models/Users'
import { Types } from 'mongoose'

describe('[API] User Endpoints', () => {
	describe('[GET] /v1/user/:id', () => {
		let user

		beforeAll(() => {
			user = User({
				firstName: 'Foo',
				lastName: 'Bar',
				email: 'foo@bar.test'
			})
		})

		it('should get user', () => {
			request(app)
				.get(`/v1/restaurant/${user.id}`)
				.expect(200, {
					status: true,
					data: {
						firstName: user.firstName,
						lastName: user.lastName,
						email: user.email
					}
				})
		})

		it('shouldnt get user', () => {
			request(app)
				.get(`/v1/user/${Types.ObjectId()}`)
				.expect(500, {
					status: false
				})
		})
	})

	describe('[POST] /v1/user', () => {
		let user

		beforeAll(() => {
			user = {
				firstName: 'Foo',
				lastName: 'Bar',
				email: 'foo@bar.test'
			}
		})

		it('should create user', () => {
			request(app)
				.post('/v1/user')
				.send({
					firstName: user.firstName,
					lastName: user.lastName,
					email: user.email
				})
				.set('Accept', 'application/json')
				.expect(200, {
					status: true,
					data: {
						firstName: user.firstName,
						lastName: user.lastName,
						email: user.email
					}
				})
		})

		it('shouldnt create user', () => {
			request(app)
				.post('/v1/user')
				.send({})
				.expect(500, {
					status: false
				})
		})
	})
})
