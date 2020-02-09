// @flow
import gql from 'graphql-tag'

export const GET_RESTAURANT = gql`
	query Restaurant($_id: ID!) {
		restaurant(_id: $_id) {
			_id
			name
			email
			phone
		}
	}
`
export const UPDATE_RESTAURANT = gql`
	mutation($_id: ID!, $restaurant: RestaurantInput) {
		updateRestaurant(_id: $_id, restaurant: $restaurant) {
			_id,
			name,
			email,
			phone
		}
	}
`
