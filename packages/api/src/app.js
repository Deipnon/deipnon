import express from 'express'
import { apolloServer } from './graphql'
import cors from 'cors'
import helmet from 'helmet'
import bodyParser from 'body-parser'
import passport from 'passport'
import mongoose from 'mongoose'

import { DB_CONNECTION } from './config'
import jwtStrategy from './strategy/jwt'
import Routes from './routes'

class App {
	constructor () {
		const app = express()
		passport.use('jwt', jwtStrategy)
		app.use('/graphql', (req, res, next) => {
			passport.authenticate('jwt', { session: false }, (_, user, __) => {
				if (user) {
					req.user = user
				}

				next()
			})(req, res, next)
		})
		apolloServer.applyMiddleware({
			app,
			path: '/graphql'
		})
		this.app = app
		this.config()
		this.app.use(Routes)
		this.mongoSetup()
	}

	config () {
		this.app.use(cors())
		this.app.use(bodyParser.json())
		this.app.use(bodyParser.urlencoded({ extended: false }))
		this.app.use(helmet())
	}

	mongoSetup () {
		mongoose
			.connect(DB_CONNECTION, {
				useNewUrlParser: true,
				useUnifiedTopology: true
			})
			.then(() => console.log('MongoDB Connected'))
			.catch(err => console.log(err))
		mongoose.set('useCreateIndex', true)
		mongoose.set('useFindAndModify', false)
	}
}

export default new App().app
