export interface CardRequest {
    name: string;
    cardNumber: string;
    expirationMonth: number;
    expirationYear: number;
    cvc: string;
}