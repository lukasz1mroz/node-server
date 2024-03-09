import {createLogger, format, transports} from 'winston'

export const expressWinstonConfig = (level?: string) => ({
  msg: 'HTTP {{req.method}} {{req.url}}',
  format: format.combine(format.timestamp(), format.json()),
  level: level ? level : process?.env?.LOG_LEVEL,
  colorize: true,
  transports: [new transports.Console()],
})

export const logger = createLogger(expressWinstonConfig())
