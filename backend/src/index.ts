import express, { Express } from 'express'
import http from 'http'
import cors from 'cors'
import routes from './routes'

const PORT: string | number = process.env.PORT || 4000
const app: Express = express()

// Middleware
app.use(cors())
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

// Routes
app.use('/', routes)

// Error Handling
app.use((_req, res, _next) => {
    const error = new Error('Not Found');
    return res.status(404).json({
        message: error.message
    });
});

// Server
const httpServer = http.createServer(app)
httpServer.listen(PORT, () =>
  console.log(`The server is running at ${PORT} port`)
)
