import { Controller } from "@/presentation/controllers/ports";
import { MakeCardRepository } from "./make-card-repository";
import { ListCards } from "@/usecases/list-cards";
import { ListCardsController } from "@/presentation/controllers/list-cards-controller";
import { Card } from "@/usecases/datatypes/card";

export const MakeListCardsController = (): Controller<Card> => {
    const cardRepository = MakeCardRepository();
    const useCase = new ListCards(cardRepository);
    const controller = new ListCardsController(useCase);
    return controller;
}