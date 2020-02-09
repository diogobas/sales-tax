import * as React from 'react';
import Receipt from './../components/views/Receipt';
import {baskets} from './fixtures/Baskets';
import Basket from './../components/views/Basket';

export default function SalexTax() {
    return (
        <div className="container">
            <h1>{'Sales Tax'}</h1>
            {
                baskets.map((basket) => {
                    return (
                        <>
                            <>
                                <h2>{`Basket ${basket.id}`}</h2>
                                <Basket items={basket.items} />
                            </>
                            <>
                                <h2>{'Receipt'}</h2>
                                <Receipt items={basket.items} />
                            </>
                        </>
                    );
                })
            }
        </div>
    );
}