import * as React from 'react';
import Receipt from './tables/Receipt';
import AddItemForm from './forms/AddItemForm';

export interface Item {
    id: number;
    item: string;
    price: number;
}

export default function SalexTax() {
    const itemsData: Item[] = [
        {
            id: 1,
            item: 'Book',
            price: 12.49
        },
        {
            id: 2,
            item: 'Music CD',
            price: 14.99
        },
        {
            id: 3,
            item: 'Chocolate Bar',
            price: 0.85
        }
    ];

    const [items, setItems] = React.useState(itemsData);

    function addItem(item: Item) {
        item.id = items.length + 1;

        setItems([
            ...items,
            item
        ]);
    }

    return (
        <div className="container">
            <h1>{'Sales Tax'}</h1>
            <div className="flex-row">
                <div className="flex-large">
                    <h2>{'Add item'}</h2>
                    <AddItemForm addItem={addItem} />
                </div>
                <div className="flex-large">
                    <h2>{'Receipt'}</h2>
                    <Receipt items={items} />
                </div>
            </div>
        </div>
      );
}