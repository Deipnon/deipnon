// @flow
import { useCallback } from 'react'
import { prop } from 'ramda'
import { useQuery } from '@apollo/react-hooks'
import { useMutation } from '@apollo/react-hooks'

// Graphqls
import { UPDATE_RESTAURANT, GET_RESTAURANT } from './gql'

// Types
import { type RestaurantType } from '@deipnon/utils/lib/types/Restaurant'

export type ChildrenPropsType = {|
	restaurant: RestaurantType,
	onUpdateRestaurant: (RestaurantType) => void
|}

type PropsType = {|
	children: (ChildrenPropsType) => React$Node
|}


export default (props: PropsType) => {

	// TODO: Move it to the app state
	const { data } = useQuery(GET_RESTAURANT, { variables: {
		id: '5dad739a2525263ef51bb407'
	}})

	const [ updateRestaurant ] = useMutation(UPDATE_RESTAURANT);

	const onUpdateRestaurant = useCallback((restaurant: RestaurantType) => {
		updateRestaurant({ variables: {
			_id: restaurant._id,
			restaurant: {
				name: restaurant.name,
				email: restaurant.email,
				phone: restaurant.phone,
				address: {
					addressLine: restaurant.address.addressLine,
					zipCode: restaurant.address.zipCode,
					city: restaurant.address.city,
					state: restaurant.address.state
				}
			}
		} })
	}, [updateRestaurant])

	return props.children({
		restaurant : prop('restaurant', data),
		onUpdateRestaurant
	})
}
