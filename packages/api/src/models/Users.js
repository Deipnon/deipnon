import { Schema } from 'mongoose'

export const UserSchema = new Schema({
  firstName: { required: true, type: String }
})

export default ('Users', UserSchema)
