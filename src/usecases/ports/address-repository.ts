import { Address } from "../datatypes/address";

export interface AddressRepository {
    list(): Promise<Address[]>
    create(data: Address): Promise<Address>
}