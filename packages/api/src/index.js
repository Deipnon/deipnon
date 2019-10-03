import Express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import bodyParser from 'body-parser'
import dotEnv from 'dotenv'
import utils from '@deipnon/utils/lib'
import mongoose from 'mongoose'

dotEnv.config()

mongoose.connect(process.env.DB_CONN, { useNewUrlParser: true })

const app = new Express()

// Apply middlewares
app.use(cors())
app.use(helmet())
app.use(bodyParser.json())

app.get('/', (req, res) => {
  utils.deneme()
  res.send('OK')
})

const PORT = process.env.PORT
app.listen(PORT, () => console.log(`API has been started on ${PORT}`))
