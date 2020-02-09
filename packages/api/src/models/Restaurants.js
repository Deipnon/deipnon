import { Schema, model } from 'mongoose';

export const RestaurantSchema = new Schema({
	name: { required: true, type: String },
	phone: String,
	email: String,
	has_eat_in_option: Boolean,
	has_pickup_option: Boolean,
	has_delivery_option: Boolean,
	zip_code: String,
	address_line: String,
	city: String,
	state: String
});

export default model('Restaurant', RestaurantSchema);
