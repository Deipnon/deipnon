import { Schema, model } from 'mongoose'

export const UserSchema = new Schema({
	_id: { type: ObjectIdSchema, default: function () { return new ObjectId() } },
	firstName: { required: true, type: String }
})

export default model('User', UserSchema)
