import { OrderRequest } from "@/usecases/datatypes/order";
import { OrderRepository } from "@/usecases/ports/order-repository";
import prisma from '@/external/repository/prisma/prisma-client';

export class PrismaOrderRepository implements OrderRepository {
    async checkout(data: OrderRequest) {
        const response = await prisma.order.create({ data });

        return {
            message: "checkout successfully completed"
        }
    }
}