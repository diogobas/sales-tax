import * as React from 'react';
import Receipt from './views/Receipt';
import {baskets} from './fixtures/Baskets';
import Basket from './views/Basket';
import {Box} from '@material-ui/core';

export default function SalesTax() {
    return (
        <div className="container">
            <h1>{'Sales Tax'}</h1>
            {
                baskets.map((basket) => {
                    return (
                        <>
                            <Box flexDirection="row">
                                <h2>{`Basket ${basket.id}`}</h2>
                                <Basket items={basket.items} />
                            </Box>
                            <Box flexDirection="row">
                                <h2>{'Receipt'}</h2>
                                <Receipt items={basket.items} />
                            </Box>
                        </>
                    );
                })
            }
        </div>
    );
}