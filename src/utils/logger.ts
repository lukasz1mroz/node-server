import { createLogger, format, transports } from 'winston';

export const expressWinstonConfig = (level?: string) => ({
  level: level,
  message: 'HTTP {{req.method}} {{req.url}}',
  format: format.combine(format.timestamp(), format.json()),
  transports: [new transports.Console()],
});

export const logger = createLogger(expressWinstonConfig());
