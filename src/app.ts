import express from 'express'
import bodyParser from 'body-parser'
import expressWinston from 'express-winston'
import {expressErrorHandler} from './utils/errorHandler'
import {logger, expressWinstonConfig} from './utils/logger'
import router from './controller/router'

export const expressApp = () => {
  const app = express()
  app.use(expressWinston.logger(expressWinstonConfig('info')))
  app.use(bodyParser.json())
  app.use('/', router)
  app.use(expressWinston.errorLogger(expressWinstonConfig('info')))
  app.use(expressErrorHandler)
  const http = app.listen(process.env.PORT || 3000, () => {
    logger.info(`Listening on port ${process.env.PORT || 3000}`)
  })
  const shutdown = async () => {
    try {
      http.close()
      process.exit(0)
    } catch (e) {
      process.exit(1)
    }
  }
  process.on('exit', shutdown)
  process.on('close', shutdown)
  process.on('SIGINT', shutdown)
  process.on('SIGTERM', shutdown)
  return Promise.resolve(http)
}

export default {
  expressApp,
}
