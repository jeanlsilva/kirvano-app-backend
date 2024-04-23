import { Controller } from "@/presentation/controllers/ports";
import { CreateAddress } from "@/usecases/create-address";
import { Address } from "@/usecases/datatypes/address";
import { MakeAddressRepository } from "./make-address-repository";
import { CreateAddressController } from "@/presentation/controllers/create-address-controller";

export const MakeCreateAddressController = (): Controller<Address> => {
    const addressRepository = MakeAddressRepository();
    const useCase = new CreateAddress(addressRepository);
    const createAddressController = new CreateAddressController(useCase);
    return createAddressController;
}