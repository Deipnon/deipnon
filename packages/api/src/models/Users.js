import { Schema, model } from 'mongoose'

export const UserSchema = new Schema({
	firstName: { required: true, type: String },
	lastName: { required: true, type: String },
	email: { required: true, type: String }
})

export default model('User', UserSchema)
