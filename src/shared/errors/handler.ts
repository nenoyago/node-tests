import { ErrorRequestHandler, Request, Response, NextFunction } from 'express';
import { AppError } from './AppError';

export const errorHandler: ErrorRequestHandler = (
  error: Error,
  _: Request,
  response: Response,
  next: NextFunction
) => {
  if (error instanceof AppError) {
    return response.status(error.error.statusCode!).json({
      error: true,
      statusType: error.error.statusType,
      message: error.error.message,
    });
  }

  return response.status(500).json({
    error: true,
    statusType: 'internal_server_error',
    message: error.message,
  });
};
