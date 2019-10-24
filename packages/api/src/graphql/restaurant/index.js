import { gql } from 'apollo-server-express'
import Restaurants from '../../models/Restaurants'

export const typeDefs = gql`
	extend type Query {
		restaurant(id: ID!): Restaurant
		restaurants: [Restaurant]
	}

	extend type Mutation {
		createRestaurant(
			name: String!
			phone: String!
			email: String!
			address: AddressInput!
		): Restaurant!
		updateRestaurant(
			id: ID!
			name: String!
			phone: String!
			email: String!
			address: AddressInput!
		): Restaurant!
		deleteRestaurant(id: ID!): Boolean!
	}

	type Restaurant {
		_id: ID!
		name: String!
		phone: String!
		email: String!
		address: Address!
		workingHours: WorkingHours!
	}

	type Address {
		_id: ID!
		addressLine: String!
		zipCode: String!
		city: String!
		state: String!
	}

	input AddressInput {
		addressLine: String!
		zipCode: String!
		city: String!
		state: String!
	}

	type WorkingHours {
		_id: ID!
		opensAt: WorkingHour!
		closesAt: WorkingHour!
	}

	type WorkingHour {
		hh: Int!
		mm: Int!
	}
`

export const resolvers = {
	Mutation: {
		createRestaurant: async (_, { name, phone, email, address }) => {
			const restaurant = await Restaurants.create({
				name,
				phone,
				email,
				address
			})

			return restaurant.toObject()
		},
		updateRestaurant: async (_, { id, name, phone, email, address }) => {
			let restaurant = await Restaurants.findById(id)
			if (!restaurant) {
				throw new Error('Restaurant not found!')
			}

			await restaurant.updateOne({
				name,
				phone,
				email,
				address
			})

			restaurant = await Restaurants.findById(id)

			return restaurant.toObject()
		},
		deleteRestaurant: async (_, { id }) => {
			const restaurant = await Restaurants.findById(id)
			if (!restaurant) {
				throw new Error('Restaurant not found!')
			}

			await restaurant.remove()

			return true
		}
	},
	Query: {
		restaurants: async _ => {
			const restaurants = await Restaurants.find({})

			return restaurants.map(restaurant => restaurant.toObject())
		},
		restaurant: async (_, { id }) => {
			const restaurant = await Restaurants.findById(id)
			if (!restaurant) {
				throw new Error('Restaurant not found!')
			}

			return restaurant.toObject()
		}
	}
}
