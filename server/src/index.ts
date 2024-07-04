import express, { urlencoded, json } from 'express'
import { config } from 'dotenv'
config()
import './config/db'
import connectToDB from './config/db'
import UserRoutes from './routes/UserRoutes'
import { createServer } from 'http'
import cors from 'cors'
const app = express()

connectToDB()

app.use(cors({ origin: '*'}))
app.use(urlencoded({ extended: false }))
app.use(json())

app.use('/api', UserRoutes)

const server = createServer(app)

server.listen(process.env.SERVER_PORT || 3001, () => {
  console.log(
    'Server is running at http://localhost:' + (process.env.SERVER_PORT || 3001)
  )
})
