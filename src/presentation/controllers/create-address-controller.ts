import { Address } from "@/usecases/datatypes/address";
import { Controller, HttpRequest, HttpResponse } from "./ports";
import { UseCase } from "@/usecases/ports/use-case";

export class CreateAddressController implements Controller<Address> {
    constructor(private useCase: UseCase<HttpRequest<Address>, Address>) {}

    async handle(request: HttpRequest<Address>): Promise<HttpResponse<Address>> {
        try {
            const address = await this.useCase.perform(request);

            return {
                statusCode: 200,
                data: address,
                message: "Address successfully created"
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