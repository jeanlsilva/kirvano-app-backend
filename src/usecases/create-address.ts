import { HttpRequest } from "@/presentation/controllers/ports";
import { UseCase } from "./ports/use-case";
import { Address } from "./datatypes/address";
import { AddressRepository } from "./ports/address-repository";

export class CreateAddress implements UseCase<HttpRequest<Address>, Address> {
    constructor(private addressRepository: AddressRepository) {}

    async perform(request: HttpRequest<Address>): Promise<Address> {
        return this.addressRepository.create(request.body);
    }
}