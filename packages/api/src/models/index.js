import { model } from 'mongoose'

import { userSchema } from './Users'
import { restaurantSchema } from './Restaurants'

export const User = model('User', userSchema)
export const Restaurant = model('Restaurant', restaurantSchema)
