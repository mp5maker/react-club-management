import cors from 'cors'
import express, { Express } from 'express'
import http from 'http'
import path from 'path'
import routes from './routes'
import responseHelper from './utilties/responseHelper'

const PORT: string | number = process.env.PORT || 4000
const app: Express = express()

// Static Files
app.use(express.static(path.join(__dirname, '..', 'public')))

// Middleware
app.use(cors())
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

// Routes
app.use('/api/v1/', routes)

// Error Handling
app.use(responseHelper.error.logger)
app.use(responseHelper.error.response)

// Server
const httpServer = http.createServer(app)
httpServer.listen(PORT, () =>
  console.log(`The server is running at ${PORT} port`)
)
