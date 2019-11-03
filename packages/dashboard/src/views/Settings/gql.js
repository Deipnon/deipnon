// @flow
import gql from 'graphql-tag'

export { GET_RESTAURANT } from '@deipnon/utils/lib/graphql/client/queries'
export const UPDATE_RESTAURANT = gql`
	mutation($_id: ID!, $restaurant: RestaurantInput) {
		updateRestaurant(_id: $_id, restaurant: $restaurant) {
			_id,
			name,
			email,
			phone,
			address {
				addressLine,
				zipCode,
				city,
				state
			}
		}
	}
`
