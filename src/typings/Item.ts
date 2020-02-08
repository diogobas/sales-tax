type Tax = {
    name: string;
    tax: number;
}

export const Book: Tax = {
    name: 'Book',
    tax: 0
} 

export const Food: Tax = {
    name: 'Food',
    tax: 0
} 

export const MedicalProduct: Tax = {
    name: 'MedicalProduct',
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
    tax: .05
}

export interface Item {
    id: number;
    quantity: number;
    item: string;
    price: number;
    type: Tax;
    market: Tax;
}