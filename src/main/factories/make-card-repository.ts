import { PrismaCardRepository } from "@/external/repository/prisma/prisma-card-repository";
import { CardRepository } from "@/usecases/ports/card-repository";

export const MakeCardRepository = (): CardRepository => {
    return new PrismaCardRepository();
}