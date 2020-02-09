import React, { useCallback } from 'react';
import { useQuery, useMutation } from '@apollo/react-hooks'

import RestaurantInfoForm from '../../../components/Forms/RestaurantInfo'

// Graphqls
import { UPDATE_RESTAURANT, GET_RESTAURANT } from './gql'

const Restaurant = (props) => {

	// TODO: Move it to the app state
	const { data = { restaurant: {} } } = useQuery(GET_RESTAURANT, { variables: {
		_id: '5e403c2ee7179a2f011a2be4'
	}})

	const [ updateRestaurant ] = useMutation(UPDATE_RESTAURANT, {
		onCompleted: () => console.log('COMPLETED')
	});

	const onSubmit = useCallback((restaurant) => {
		updateRestaurant({ variables: {
			_id: '5e403c2ee7179a2f011a2be4',
			restaurant: {
				name: restaurant.name,
				email: restaurant.email,
				phone: restaurant.phone
			}
		} })
	}, [updateRestaurant, data._id])

	return <RestaurantInfoForm {...data.restaurant} onSubmit={onSubmit}/>
}

export default Restaurant
