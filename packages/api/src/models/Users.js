import { Schema, Types } from 'mongoose'
const ObjectIdSchema = Schema.ObjectId
const ObjectId = Types.ObjectId

export const UserSchema = new Schema({
	_id: { type: ObjectIdSchema, default: function () { return new ObjectId() } },
	firstName: { required: true, type: String }
})

export default ('Users', UserSchema)
