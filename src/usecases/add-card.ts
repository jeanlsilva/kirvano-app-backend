import { UseCase } from "./ports/use-case";
import { REFUSED_CARD_NUMBER } from "@/utils/constants";
import { CardRequest, CardResponse, Card } from "./datatypes/card";
import { InvalidCardError } from "./errors/invalid-card-error";
import { ExpiredCardError } from "./errors";
import { CardRepository } from "./ports/card-repository";

export class AddCard implements UseCase<CardRequest, CardResponse> {
    constructor(
        private cardRepository: CardRepository
    ) {}

    validateCard(cardNumber: string) {
        if (cardNumber === REFUSED_CARD_NUMBER) return false;
        return /^(\S)(?!\1*$)/.test(cardNumber);
    }

    async perform(card: CardRequest): Promise<Card> {
        const cardNumber = card.number;
        const expirationMonth = card.expiry_month;
        const expirationYear = card.expiry_year;
        const expiryDate = new Date(expirationYear, expirationMonth - 1, 1);

        if (!this.validateCard(cardNumber)) {
            throw new InvalidCardError();
        }

        if (expiryDate.getTime() < Date.now()) {
            throw new ExpiredCardError();
        }

        return await this.cardRepository.create(card);
    }
}