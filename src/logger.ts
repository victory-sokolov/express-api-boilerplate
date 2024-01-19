import pino from 'pino'

const logger = pino({
    name: 'app-name',
    level: 'debug',
    transport: {
        target: 'pino-pretty'
    }
})

export default logger
