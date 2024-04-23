import { HttpRequest } from "@/presentation/controllers/ports/http-request";
import { CheckoutRequest, CheckoutResponse } from "./datatypes";
import { ExpiredCardError } from "./errors";
import { UseCase } from "./ports/use-case";
import { REFUSED_CARD_NUMBER } from "@/utils/constants";
import { InvalidCardError } from "./errors/invalid-card-error";

export class Checkout implements UseCase<CheckoutRequest, CheckoutResponse> {
    constructor() {}

    validateCard(cardNumber: string) {
        if (cardNumber === REFUSED_CARD_NUMBER) return false;
        return /^(\S)(?!\1*$)/.test(cardNumber);
    }

    async perform(request: HttpRequest<CheckoutRequest>) {
        const cardNumber = request.body.cardNumber;
        const expirationMonth = request.body.expirationMonth;
        const expirationYear = request.body.expirationYear;
        const expiryDate = new Date(expirationYear, expirationMonth - 1, 1);

        if (!this.validateCard(cardNumber)) {
            throw new InvalidCardError();
        }

        if (expiryDate.getTime() < Date.now()) {
            throw new ExpiredCardError();
        }

        return {
            message: 'Success'
        }
    }
}