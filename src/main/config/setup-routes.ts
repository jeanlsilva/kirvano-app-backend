import { Express, Router } from "express";
import { makeCheckoutController } from "../factories/make-checkout";
import { adaptRoute } from "../adapters/express-route-adapter";
import { CheckoutRequest } from "@/usecases/datatypes/checkout/checkout-request";

export function setupRoutes(app: Express): void {
    const router = Router();
    app.use('/', router);
    checkoutRoute(router);
}

function checkoutRoute(router: Router) {
    router.post('/checkout', adaptRoute<CheckoutRequest>(makeCheckoutController()))
}