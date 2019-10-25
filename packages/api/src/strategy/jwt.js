import { Strategy, ExtractJwt } from 'passport-jwt'
import { JWT_SECRET } from '../config'
import Users from '../models/Users'

const options = {
	jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
	secretOrKey: JWT_SECRET
}

export default new Strategy(options, async (payload, done) => {
	Users.findOne({ _id: payload.id })
		.then(user => {
			if (user) {
				return done(null, user)
			} else {
				return done(null, false)
			}
		})
		.catch(err => {
			return done(err, false)
		})
})
