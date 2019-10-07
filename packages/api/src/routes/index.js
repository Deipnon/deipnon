import { VERSION } from '../config'
import userRoute from './users/users.route'

export class Routes {
	routes (app) {
		app.use(VERSION + '/user', userRoute)
		// app.use(VERSION + '/foo', fooRoute)
	}
}
