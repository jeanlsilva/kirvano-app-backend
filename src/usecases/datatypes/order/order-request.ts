import { CheckoutRequest } from "../checkout/checkout-request"

export interface OrderRequest extends Omit<CheckoutRequest, "address" | "card"> {
    address_id: number
    card_id: number
}