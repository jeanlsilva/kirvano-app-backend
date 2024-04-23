import { PrismaAddressRepository } from '@/external/repository/prisma/prisma-address-repository';
import { AddressRepository } from '@/usecases/ports/address-repository';

export const MakeAddressRepository = (): AddressRepository => {
    return new PrismaAddressRepository();
}