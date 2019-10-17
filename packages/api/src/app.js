import express from 'express'
import { apolloServer } from './graphql'
import cors from 'cors'
import helmet from 'helmet'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'

import { DB_CONNECTION } from './config'
import Routes from './routes/'

class App {
	constructor () {
		const app = express()
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
