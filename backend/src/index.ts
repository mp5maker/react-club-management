import express, { Express } from 'express'
import http from 'http'
import routes from './routes'

const PORT: string | number = process.env.PORT || 4000
const app: Express = express()

// Middleware
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

// Routes
app.use('/', routes)

// Server
const httpServer = http.createServer(app)
httpServer.listen(PORT, () =>
  console.log(`The server is running at ${PORT} port`)
)
