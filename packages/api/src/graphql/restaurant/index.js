import { gql } from 'apollo-server-express'
import Restaurants from '../../models/Restaurants'

export const typeDefs = gql`
	type Address {
		addressLine: String!
		zipCode: String!
		city: String!
		state: String!
	}

	type Restaurant {
		_id: ID!
		name: String!
		phone: String!
		email: String!
		address: Address!
	}

	input AddressInput {
		addressLine: String!
		zipCode: String!
		city: String!
		state: String!
	}

	input RestaurantInput {
		name: String!
		phone: String!
		email: String!
		address: AddressInput
	}

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

		updateRestaurant(_id: ID!, restaurant: RestaurantInput): Restaurant!

		deleteRestaurant(
			id: ID!
		): Boolean!

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
		updateRestaurant: async (_, data) => {
			const restaurant = await Restaurants.findByIdAndUpdate(data._id, data.restaurant, { new: true })
			return restaurant
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
		restaurants: () => {
			return Restaurants.find({}).exec()
		},
		restaurant: async (_, { id }) => {
			const restaurant = await Restaurants.findById(id).exec()
			if (!restaurant) {
				throw new Error('Restaurant not found!')
			}

			return restaurant
		}
	}
}
