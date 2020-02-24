// @flow
import React from 'react';
import { notification } from 'antd'

import gql from 'graphql-tag';
import { useMutation } from '@apollo/react-hooks'

// Hooks
import { useRestaurant } from '../../../hooks'

// Helpers
import { get } from '../../../helpers/apiHelper'
import RestaurantForm from './RestaurantForm'

// Graphqls
import { getGeolocation } from '../../../graphql/queries';
import { updateRestaurant } from '../../../graphql/mutations';

const Restaurant = (): React$Node => {

  const restaurant = useRestaurant();
  const [update] = useMutation(gql(updateRestaurant))

  const handleSubmit = async ({ addressLine, zipCode, city, state, ...updatedRestaurant }, done) => {

    const address = {
      addressLine,
      zipCode,
      city,
      state
    }

    const { geolocation: { lat, lng } } = await get(getGeolocation, {
      request: address
    }, 'geolocation')
    
    update({
      variables: {
        input: {
          ...updatedRestaurant,
          ...address,
          lat,
          lng
        }
      }
    })
    .then(() => {
      notification.success({ message: 'Done!', description: 'Your changes has been saved!' })
      done()
    })
    .catch(() =>  {
      notification.error({ message: 'Error!', description: 'Something went wrong. Please try again!' })
      done()
    })
  }

  // Render
  return <RestaurantForm {...restaurant} onSubmit={handleSubmit} />
}


Restaurant.displayName = 'SettingsRestaurantTab'

export default Restaurant
