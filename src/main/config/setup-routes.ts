import { Express, Router } from "express";
import { makeCheckoutController } from "../factories/make-checkout-controller";
import { adaptRoute } from "../adapters/express-route-adapter";
import { CheckoutRequest } from "@/usecases/datatypes/checkout/checkout-request";
import { Address } from "@/usecases/datatypes/address";
import { MakeCreateAddressController } from "../factories/make-create-address-controller";
import { MakeListAddressesController } from "../factories/make-list-addresses-controller";
import { Card } from "@/usecases/datatypes/card";
import { MakeListCardsController } from "../factories/make-list-cards-controller";

export function setupRoutes(app: Express): void {
    const router = Router();
    app.use('/', router);
    checkoutRoute(router);
    createAddressRoute(router);
    listAddressesRoute(router);
    listCardsRoute(router);
}

function checkoutRoute(router: Router) {
    router.post('/checkout', adaptRoute<CheckoutRequest>(makeCheckoutController()))
}

function createAddressRoute(router: Router) {
    router.post('/address', adaptRoute<Address>(MakeCreateAddressController()));
}

function listAddressesRoute(router: Router) {
    router.get('/address', adaptRoute<Address>(MakeListAddressesController()));
}

function listCardsRoute(router: Router) {
    router.get('/card', adaptRoute<Card>(MakeListCardsController()));
}