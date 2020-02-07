type Tax = {
    name: string;
    tax: number;
}

export const FreeTax: Tax = {
    name: 'Book' || 'Food' || 'Medical Product',
    tax: 0
} 

export const GeneralGoods: Tax = {
    name: 'General Goods',
    tax: .10
}

export const Local: Tax = {
    name: 'Local',
    tax: 0
}

export const Imported : Tax = {
    name: 'Imported',
    tax: .5
}

export interface Item {
    id: number;
    item: string;
    price: number;
    type: Tax;
    market: Tax;
}