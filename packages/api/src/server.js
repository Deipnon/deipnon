import app from './app'
import {PORT} from './config'

app.listen(PORT, () => {
  console.log(`API has been started on ${PORT}`)
})
