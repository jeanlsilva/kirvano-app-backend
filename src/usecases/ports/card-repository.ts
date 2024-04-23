import { Card } from "../datatypes/card";

export interface CardRepository {
    list(): Promise<Card[]>
    create(data: Card): Promise<Card>
}