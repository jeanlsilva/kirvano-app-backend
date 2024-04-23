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
        let cardId
        if (request.body.card_id) {
            cardId = request.body.card_id
        } else {
            const card = await this.addCard.perform(request.body.card);
            cardId = card.id;
        }

        await this.orderRepository.checkout({
            card_id: cardId,
            address_id: request.body.address_id,
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