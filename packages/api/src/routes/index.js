import userRoute from './v1/users/users.route'

export class Routes {
  routes (app) {
    app.use('/v1/', userRoute)
    // app.use('/v2/', userRoute2)
  }
}
