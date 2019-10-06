import { VERSION } from '../config'
import userRoute from './v1/users/users.route'

export class Routes {
  routes (app) {
    app.use(VERSION + '/user', userRoute)
    // app.use(VERSION + '/foo', fooRoute)
  }
}
