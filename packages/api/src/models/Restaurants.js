import { Schema, model } from 'mongoose'

export const restaurantSchema = new Schema({
	restaurantName: { required: true, type: String }
})

export default model('Restaurant', restaurantSchema)
