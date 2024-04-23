import { Address } from "@/usecases/datatypes/address";
import { Controller, HttpRequest, HttpResponse } from "./ports";
import { UseCase } from "@/usecases/ports/use-case";

export class ListAddressesController implements Controller<Address> {
    constructor(private listAddressUseCase: UseCase<HttpRequest<Address>, Address[]>) {}

    async handle(request: HttpRequest<Address>): Promise<HttpResponse<Address[]>> {
        try {
            const list = await this.listAddressUseCase.perform(request);
            return {
                statusCode: 200,
                data: list,
                message: "success"
            }
        } catch (error: any) {
            return {
                statusCode: 500,
                errorType: error.constructor.name,
                message: error.message
            }
        }
    }
}