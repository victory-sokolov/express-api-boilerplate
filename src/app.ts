import 'dotenv/config'
import express, { Request, Response } from 'express'
import logger from './logger'

const app = express()
const port = process.env.APP_PORT

app.use(express.json())
app.use('/healthcheck', (request: Request, response: Response) => {
    response.sendStatus(200)
})

const server = app.listen(port)
logger.info(`Listening on port ${port}`)

process.on('SIGTERM', () => {
    logger.debug('SIGTERM signal received: closing HTTP server')
    server.close(() => {
        logger.debug('HTTP server closed')
    })
})
