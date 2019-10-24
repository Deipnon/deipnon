import { Strategy, ExtractJwt } from 'passport-jwt'
import Users from '../models/Users'

const options = {
	jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
	secretOrKey: 'SECRET'
}

export default new Strategy(options, async (payload, done) => {
	const user = Users.findOne({ _id: payload.id }) || null

	return done(null, user)
})
