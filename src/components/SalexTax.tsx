import * as React from 'react';
import Receipt from './tables/Receipt';
import {Item} from '../typings/Item';
import {baskets} from './fixtures/Baskets';
import Basket from './tables/Basket';

export default function SalexTax() {
    return (
        <div className="container">
            <h1>{'Sales Tax'}</h1>
            {
                baskets.map((basket) => {
                    const [items, setItems] = React.useState(basket.items);
            
                    function addItem(item: Item) {
                        item.id = items.length + 1;
            
                        setItems([
                            ...items,
                            item
                        ]);
                    }
            
                    return (
                        <div className="flex-row">
                            <div className="flex-large">
                                <h2>{`Basket ${basket.id}`}</h2>
                                <Basket items={items} />
                            </div>
                            <div className="flex-large">
                                <h2>{'Receipt'}</h2>
                                <Receipt items={items} />
                            </div>
                        </div>
                    );
                })
            }
        </div>
    );
}