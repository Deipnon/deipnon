import {useContext} from 'react'
import { RestaurantContext } from '../views/Layout'

const useRestaurant = () => {
  const restaurant = useContext(RestaurantContext);
  
  return restaurant
}

export default useRestaurant