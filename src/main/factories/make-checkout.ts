import { CheckoutController } from '@/presentation/controllers/checkout-controller'
import { Controller } from '@/presentation/controllers/ports/controller'
import { Checkout } from '@/usecases/checkout'
import { MakeCardRepository } from './make-card-repository';
import { MakeOrderRepository } from './make-order-repository';
import { AddCard } from '@/usecases/add-card';
import { CheckoutRequest } from '@/usecases/datatypes/checkout/checkout-request';

export const makeCheckoutController = (): Controller<CheckoutRequest> => {
    const cardRepository = MakeCardRepository();
    const orderRepository = MakeOrderRepository();
    const addCardUseCase = new AddCard(cardRepository);
    const checkoutUseCase = new Checkout(addCardUseCase, orderRepository);
    const checkoutController = new CheckoutController(checkoutUseCase);
    return checkoutController;
}