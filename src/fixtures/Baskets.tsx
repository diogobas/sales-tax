import {Local, GeneralGoods, Imported, Book, Food, MedicalProduct} from "../typings/Item"

const basket1 = {
    id: 1,
    items: [
        {
            id: 1,
            quantity: 1,
            item: 'Book',
            price: 12.49,
            type: Book,
            market: Local
        },
        {
            id: 2,
            quantity: 1,
            item: 'Music CD',
            price: 14.99,
            type: GeneralGoods,
            market: Local
        },
        {
            id: 3,
            quantity: 1,
            item: 'Chocolate Bar',
            price: 0.85,
            type: Food,
            market: Local
        }
    ]
}
    
const basket2 = {
    id: 2,
    items: [
        {
            id: 1,
            quantity: 1,
            item: 'Box of chocolates',
            price: 10,
            type: Food,
            market: Imported
        },
        {
            id: 2,
            quantity: 1,
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
            quantity: 1,
            item: 'Bottle of Perfume',
            price: 27.99,
            type: GeneralGoods,
            market: Imported
        },
        {
            id: 2,
            quantity: 1,
            item: 'Bottle of Perfume',
            price: 18.99,
            type: GeneralGoods,
            market: Local
        },
        {
            id: 3,
            quantity: 1,
            item: 'Headache Pills',
            price: 9.75,
            type: MedicalProduct,
            market: Local
        },
        {
            id: 4,
            quantity: 1,
            item: 'Chocolates',
            price: 11.25,
            type: Food,
            market: Imported
        }
    ]
}

export const baskets = [
    basket1,
    basket2,
    basket3
];