import { OrderRequest, OrderResponse } from "../datatypes/order";

export interface OrderRepository {
    checkout(data: OrderRequest): Promise<OrderResponse>
}