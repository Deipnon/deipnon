// @flow
import * as React from 'react'
import gql from 'graphql-tag'
import { useQuery } from '@apollo/react-hooks'

const GET_RESTAURANT = gql`
	{
		restaurant(id: "5dad739a2525263ef51bb407") {
			_id
			name
			address {
				addressLine
				zipCode
				city
				state
			}
		}
	}
`

const Menu = () => {
	const { loading, error } = useQuery(GET_RESTAURANT)

	if (loading) return 'Loading...'
	if (error) return `Error! ${error.message}`

	return (<React.Fragment>
		Menu
	</React.Fragment>)
}


export default Menu
