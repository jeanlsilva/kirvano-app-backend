import { Card } from '@/usecases/datatypes/card';
import { CardRepository } from '@/usecases/ports/card-repository';
import prisma from '@/external/repository/prisma/prisma-client';

export class PrismaCardRepository implements CardRepository {
    async list() {
        const cards = await prisma.card.findMany();
        return cards;
    }

    async create(data: Card) {
        const card = await prisma.card.create({ data });
        return card;
    }
}