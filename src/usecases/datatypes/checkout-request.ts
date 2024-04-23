export interface CheckoutRequest {
    name: string
    cardNumber: string;
    expirationMonth: number;
    expirationYear: number;
    cvc: string;
}