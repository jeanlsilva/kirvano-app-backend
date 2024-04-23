import { CardRequest } from "../card"

export interface CheckoutRequest {
    card: CardRequest
    product_name: string
    product_avatar: string
    subtotal: number
    tax: number
    shipping_fee: number
    total: number
}