import {Item} from "./Item"

export interface Basket {
    id: number;
    items: Item[];
    total: number;
    salesTaxes: number;
}