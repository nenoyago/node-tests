interface IError {
  message: string;
  statusType?: string;
  statusCode?: number;
}

export class AppError {
  readonly error: IError;

  constructor({ message, statusType, statusCode = 400 }: IError) {
    this.error = Object.create({ message, statusType, statusCode });
  }
}
