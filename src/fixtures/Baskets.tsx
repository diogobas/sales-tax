import {FreeTax, Local, GeneralGoods, Item, Imported} from "../typings/Item"

const basket1 = {
    id: 1,
    items: [
        {
            id: 1,
            item: 'Book',
            price: 12.49,
            type: FreeTax,
            market: Local
        },
        {
            id: 2,
            item: 'Music CD',
            price: 14.99,
            type: GeneralGoods,
            market: Local
        },
        {
            id: 3,
            item: 'Chocolate Bar',
            price: 0.85,
            type: FreeTax,
            market: Local
        }
    ]
}
    
const basket2 = {
    id: 2,
    items: [
        {
            id: 1,
            item: 'Box of chocolates',
            price: 10,
            type: FreeTax,
            market: Imported
        },
        {
            id: 2,
            item: 'Bottle of Perfume',
            price: 47.50,
            type: GeneralGoods,
            market: Imported
        }
    ]
};

const basket3 = {
    id: 3,
    items: [
        {
            id: 1,
            item: 'Bottle of Perfume',
            price: 27.99,
            type: GeneralGoods,
            market: Imported
        },
        {
            id: 2,
            item: 'Bottle of Perfume',
            price: 18.99,
            type: GeneralGoods,
            market: Local
        },
        {
            id: 3,
            item: 'Headache Pills',
            price: 9.75,
            type: FreeTax,
            market: Local
        },
        {
            id: 4,
            item: 'Chocolates',
            price: 11.25,
            type: FreeTax,
            market: Imported
        }
    ]
}

export const baskets = [
    basket1,
    basket2,
    basket3
];