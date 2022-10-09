import { Product } from "../product/product";
import { Purchase } from "../purchase/purchase";

export interface PurchaseItem {
    id: number;
    qty: number;
    product: Product;
    purchase: Purchase;
}