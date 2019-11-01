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
		restaurant(_id: ID!): Restaurant
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
			_id: ID!
		): Boolean!

  }
`

export const resolvers = {
	Mutation: {
		createRestaurant: (_, data) => {
			const restaurant = new Restaurants(data)

			// TODO: Log serverside error
			return restaurant.save()
		},
		updateRestaurant: (_, data) => {
			// TODO: Log server side error
			return Restaurants.findByIdAndUpdate(data._id, data.restaurant, { new: true })
		},
		deleteRestaurant: async (_, { _id }) => {
			// TODO: Log server side error
			Restaurants.findByIdAndRemove(_id)
			return true
		}
	},
	Query: {
		restaurants: () => {
			// TODO: Log server side error
			return Restaurants.find({}).exec()
		},
		restaurant: async (_, { _id }) => {
			// TODO: Log server side error
			const restaurant = await Restaurants.findById(_id).exec()
			if (!restaurant) {
				throw new Error('Restaurant not found!')
			}

			return restaurant
		}
	}
}
