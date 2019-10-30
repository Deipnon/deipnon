// @flow
import gql from 'graphql-tag'

export const GET_RESTAURANT = gql`
	query Restaurant($_id: ID!) {
		restaurant(_id: $_id) {
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
