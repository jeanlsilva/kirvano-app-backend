import { PrismaOrderRepository } from "@/external/repository/prisma/prisma-order-repository";
import { OrderRepository } from "@/usecases/ports/order-repository";

export const MakeOrderRepository = (): OrderRepository => {
    return new PrismaOrderRepository();
}