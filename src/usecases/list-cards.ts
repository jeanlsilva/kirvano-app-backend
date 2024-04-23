import { HttpRequest } from "@/presentation/controllers/ports";
import { Card } from "./datatypes/card";
import { UseCase } from "./ports/use-case";
import { CardRepository } from "./ports/card-repository";

export class ListCards implements UseCase<HttpRequest<Card>, Card[]> {
    constructor(private cardRepository: CardRepository) {}

    async perform(): Promise<Card[]> {
        const cards = await this.cardRepository.list();

        return cards;
    }
}