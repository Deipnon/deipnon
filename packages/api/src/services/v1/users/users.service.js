import crypto from 'crypto'
import { Users } from '../../../models/v1'

const createUser = async (req) => {
  const User = new Users({
    _id: crypto
      .createHash('md5')
      .update(`${req.firstName}`)
      .digest('hex'),
    firstName: req.firstName
  })
  try {
    await User.save()
    return { status: true }
  } catch (error) {
    return { status: false, message: error }
  }
}
const getUser = async (userId) => {
  try {
    const getUser = await Users.findById(userId)
    return { status: true, data: getUser }
  } catch (error) {
    return { status: false, message: error }
  }
}
export default { createUser, getUser }
