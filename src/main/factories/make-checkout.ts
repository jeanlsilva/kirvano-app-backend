import { CheckoutController } from '@/presentation/controllers/checkout-controller'
import { Controller } from '@/presentation/controllers/ports/controller'
import { Checkout } from '@/usecases/checkout'
import { CheckoutRequest } from '@/usecases/datatypes/checkout-request';

export const makeCheckoutController = (): Controller<CheckoutRequest> => {
    const useCase = new Checkout();
    const checkoutController = new CheckoutController(useCase);
    return checkoutController;
}