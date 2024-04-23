import { Card } from "@/usecases/datatypes/card";
import { Controller, HttpRequest, HttpResponse } from "./ports";
import { UseCase } from "@/usecases/ports/use-case";

export class ListCardsController implements Controller<Card> {
    constructor(private useCase: UseCase<HttpRequest<Card>,Card[]>) {}

    async handle(request: HttpRequest<Card>): Promise<HttpResponse<Card[]>> {
        try {
            const cards = await this.useCase.perform(request);

            return {
                statusCode: 200,
                data: cards,
                message: "success"
            }
        } catch (error) {
            return {
                statusCode: 500,
                errorType: error.constructor.name,
                message: error.message
            }
        }
    }
}