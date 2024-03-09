export type ErrorProps = {
  logSource: string
  description?: string
  details?: any
}

export type CustomErrorProps = ErrorProps & {
  name: string
  url?: string
  httpCode: number
}

export class CustomError extends Error {
  name: string
  httpCode: number
  logSource: string
  description: string | undefined
  details: object | undefined
  url: string | undefined

  constructor({name, httpCode, logSource, description, details, url}: CustomErrorProps) {
    super(description)
    this.name = name
    this.httpCode = httpCode
    this.logSource = logSource
    this.description = description
    this.details = details
    this.url = url
    Error.captureStackTrace(this, this.constructor)
  }
}

export class InternalServerError extends CustomError {
  constructor({logSource, description, details}: ErrorProps) {
    super({
      name: 'INTERNAL SERVER ERROR',
      httpCode: 500,
      logSource,
      description,
      details,
    })
  }
}

export class BadRequestError extends CustomError {
  constructor({logSource, description, details}: ErrorProps) {
    super({
      name: 'BAD REQUEST',
      httpCode: 400,
      logSource,
      description,
      details,
    })
  }
}
