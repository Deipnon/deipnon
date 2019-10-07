import { Users } from '../../models/'

const createUser = async (req) => {
	const User = new Users({
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
