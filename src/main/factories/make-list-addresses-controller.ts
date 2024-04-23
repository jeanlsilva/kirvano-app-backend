import { Controller } from "@/presentation/controllers/ports";
import { Address } from "@/usecases/datatypes/address";
import { MakeAddressRepository } from "./make-address-repository";
import { ListAddresses } from "@/usecases/list-addresses";
import { ListAddressesController } from "@/presentation/controllers/list-addresses-controller";

export const MakeListAddressesController = (): Controller<Address> => {
    const addressRepository = MakeAddressRepository();
    const useCase = new ListAddresses(addressRepository)
    const controller = new ListAddressesController(useCase);
    return controller;
}