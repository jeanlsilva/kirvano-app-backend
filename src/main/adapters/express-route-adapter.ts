import { Controller, HttpRequest } from '@/presentation/controllers/ports';
import { Response } from 'express';

export function adaptRoute<T>(controller: Controller<T>) {
  return async (req: HttpRequest<T>, res: Response) => {
    const httpResponse = await controller.handle(req);
    res.status(httpResponse.statusCode).json(httpResponse);
  };
}
