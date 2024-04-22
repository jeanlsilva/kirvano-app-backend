import { Controller } from '@/presentation/controllers/ports/controller';
import { HttpRequest } from '@/presentation/controllers/ports/http-request';
import { HttpResponse } from '@/presentation/controllers/ports/http-response';
import { CheckoutRequest } from '@/usecases/datatypes/checkout-request';
import { CheckoutResponse } from '@/usecases/datatypes/checkout-response';
import { UseCase } from '@/usecases/ports/use-case';

export class CheckoutController implements Controller<CheckoutRequest> {
  constructor(private useCase: UseCase<CheckoutRequest, CheckoutResponse>) {}
  async handle(request: HttpRequest<CheckoutRequest>): Promise<HttpResponse> {
    try {
      const response = await this.useCase.perform(request);
      return {
        statusCode: 200,
        message: response.message
      }
    } catch (error) {
      const userUnauthorized = error.constructor.name === 'UnauthorizedError';

      if (userUnauthorized) {
        return {
          statusCode: error.httpStatus,
          message: error.message,
          errorType: error.constructor.name,
        }
      }
      return {
        statusCode: 500,
        message: error.message,
        errorType: error.constructor.name,
      }
    }
  }
}
