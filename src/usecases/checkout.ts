import { HttpRequest } from "@/presentation/controllers/ports/http-request";
import { OrderResponse } from "./datatypes/order";
import { UseCase } from "./ports/use-case";
import { OrderRepository } from "./ports/order-repository";
import { AddCard } from "./add-card";
import { CheckoutRequest } from "./datatypes/checkout/checkout-request";

export class Checkout implements UseCase<HttpRequest<CheckoutRequest>, OrderResponse> {
    constructor(
        private addCard: AddCard,
        private orderRepository: OrderRepository
    ) {}

    async perform(request: HttpRequest<CheckoutRequest>) {
        const card = await this.addCard.perform(request.body.card)

        await this.orderRepository.checkout({
            card_id: card.id,
            address_id: 1, // TODO: create address
            product_name: request.body.product_name,
            product_avatar: request.body.product_avatar,
            subtotal: request.body.subtotal,
            tax: request.body.tax,
            shipping_fee: request.body.shipping_fee,
            total: request.body.total
        });

        return {
            message: 'Success'
        }
    }
}