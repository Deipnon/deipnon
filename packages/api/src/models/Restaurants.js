import { Schema, model } from 'mongoose'

const AddressSchema = new Schema({
	addressLine: { required: true, type: String },
	zipCode: { required: true, type: String },
	city: { required: true, type: String },
	state: { required: true, type: String }
})

const HourSchema = new Schema({
	hh: { required: true, type: Number },
	mm: { required: true, type: Number }
})

const WorkingHoursSchema = new Schema({
	[Number]: {
		opensAt: HourSchema,
		closesAt: HourSchema
	}
})

/**
 * const restaurant = {
	name: 'Silversands Pizza',
	phone: '05123123123',
	email: 'info@silversandspizza.com',
	address: {
		addressLine: '415 Boston Post Rd',
		zipCode: '06460',
		city: 'Milford',
		state: 'CT'
	},
	workingHours: {
		0: {
			opensAt: {
				hh: 9,
				mm: 0
			},
			closesAt: {
				hh: 22,
				mm: 30
			}
		},
		1: {
			opensAt: {
				hh: 9,
				mm: 0
			},
			closesAt: {
				hh: 22,
				mm: 30
			}
		},
		... Haftanin 7 gunu
	}
}
 */
export const RestaurantSchema = new Schema({
	name: { required: true, type: String },
	phone: { required: true, type: String },
	email: { required: true, type: String },
	address: AddressSchema,
	workingHours: WorkingHoursSchema

})

export default model('Restaurant', RestaurantSchema)
