import { HttpRequest } from "@/presentation/controllers/ports/http-request";
import { CheckoutRequest } from "./datatypes/checkout-request";
import { UnauthorizedError, ExpiredCardError } from "./errors";
import { UseCase } from "./ports/use-case";
import { CheckoutResponse } from "./datatypes/checkout-response";

export class Checkout implements UseCase<CheckoutRequest, CheckoutResponse> {
    constructor() {}

    async perform(request: HttpRequest<CheckoutRequest>) {
        const cardNumber = request.body.cardNumber;
        const expiryDate = request.body.cardExpiration;

        if (new Date(expiryDate).getTime() < Date.now()) {
            throw new ExpiredCardError();
        }

        return {
            message: 'Success'
        }
    }
}