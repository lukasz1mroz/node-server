type CustomErrorProps = {
  description: string;
  logSource: string;
  httpCode: number;
};

export class CustomError extends Error {
  description: string;
  logSource: string;
  httpCode: number;

  constructor({ description, logSource, httpCode }: CustomErrorProps) {
    super();
    this.description = description;
    this.logSource = logSource;
    this.httpCode = httpCode;
  }
}
