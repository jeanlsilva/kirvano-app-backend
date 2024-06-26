import { HttpRequest } from "@/presentation/controllers/ports";
import { UseCase } from "./ports/use-case";
import { Address } from "./datatypes/address";
import { AddressRepository } from "./ports/address-repository";

export class ListAddresses implements UseCase<HttpRequest<Address>, Address[]> {
    constructor(private addressRepository: AddressRepository) {}

    async perform() {
        const addresses = this.addressRepository.list();

        return addresses;
    }
}