import { Router } from 'express'
import { VERSION } from '../config'
import userRoute from './users/users.route'
import restaurantRoute from './restaurants/restaurants.route'

const router = Router()
const api = Router()

router.use(`/${VERSION}`, api)

api.use('/user', userRoute)
api.use('/restaurant', restaurantRoute)

export default router
