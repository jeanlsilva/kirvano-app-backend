import { AddressRepository } from "@/usecases/ports/address-repository";
import prisma from '@/external/repository/prisma/prisma-client';
import { Address } from "@/usecases/datatypes/address";

export class PrismaAddressRepository implements AddressRepository {
    async list() {
        const addresses = await prisma.address.findMany();
        return addresses;
    }

    async create(data: Address) {
        const address = await prisma.address.create({ data });
        return address;
    }
}