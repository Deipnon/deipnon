// @flow
import gql from 'graphql-tag'

export const GET_RESTAURANT = gql`
	query Restaurant($id: ID!) {
		restaurant(id: $id) {
			_id
			name
			email
			phone
			address {
				addressLine
				zipCode
				city
				state
			}
		}
	}
`
