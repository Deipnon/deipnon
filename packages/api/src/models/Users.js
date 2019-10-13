import { Schema, model } from 'mongoose'

const CridentialsSchema = new Schema({
	password: String,
	passwordSalt: String,
	lastLogin: { required: true, type: Number }
})

const AddressSchema = new Schema({
	friendlyName: { required: true, type: String }, // Ev adresi, ofis adresi gibi
	addressLine: { required: true, type: String },
	zipCode: { required: true, type: String },
	city: { required: true, type: String },
	state: { required: true, type: String },
	phone: { required: true, type: String },
	isDefault: { required: true, type: Boolean }
})

/**
 * const User = {
	name: 'Melih Korkmaz',
	email: 'melih@test.com',
	provider: 'custom',
	cridentials: {
		password: 'hashed',
		passwordSalt: 'randomText',
		lastLogin: 1570980740601
	},
	addresses: [{
		friendlyName: 'Home',
		addressLine: '79 Cherry St',
		zipCode: '06460',
		city: 'Milford',
		state: 'CT',
		phone: '01223344',
		isDefault: true
	}]
}
 */
export const UserSchema = new Schema({
	name: { required: true, type: String },
	email: { required: true, type: String },
	provider: { required: true, type: String }, // Custom, Facebook, Google
	providerId: { type: String }, // Kullanici eger facebook yada google ile giris yapmis ise oradaki providerID's
	cridentials: CridentialsSchema,
	addresses: [AddressSchema]
})

export default model('User', UserSchema)
