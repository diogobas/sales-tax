import * as React from 'react';
import {Item} from '../../typings/Item';
import SpanningTable from '../dataDisplay/SpanningTable';

interface Props {
    items: Item[];
}

function calculateTax(price: number, rate: number) {
    //sales tax are that for a tax rate of n%, a shelf price of p contains (np/100)
    let tax = (price * rate);

    //The rounding rules: rounded up to the nearest 0.05
    tax = Math.ceil(tax / 0.05) * 0.05;

    return tax;
}

function getCalculatedTax(item: Item) {
    let priceAfterTax = item.price,
        tax = 0;
    const regularTax = item.type.tax,
        importedTax = item.market.tax;

    switch (item.type.name) {
        case 'Book':
        case 'Food':
        case 'Medical Product':
            if (item.market.name !== 'Local') {
                tax = calculateTax(item.price, importedTax);

                priceAfterTax = tax + item.price;
            }
            break;
        case 'General Goods': 
            if (item.market.name === 'Local') {
                tax = calculateTax(item.price, regularTax);

                priceAfterTax = tax + item.price;
            } else {
                tax = calculateTax(item.price, regularTax + importedTax);

                priceAfterTax = tax + item.price;
            }
            break;
        default:
            break;
    }

    return item.quantity * priceAfterTax;
}


function calculateItemsPrice(items: Item[]) {
    let total = 0,
        salesTaxes = 0;

    const parsedItems = items.map((item) => {
        const priceAfterTax = getCalculatedTax(item);

        total += priceAfterTax;
        salesTaxes += priceAfterTax - item.price; 

        const parsedItem: Item = {
            ...item,
            price: priceAfterTax
        }

        return parsedItem;
    })

    return ({
        items: parsedItems,
        sumUp: {
            total,
            salesTaxes
        }
    });
}

export default function Receipt({items}: Props) {
    const calculatedItems = calculateItemsPrice(items);

    return (
        <SpanningTable
            items={calculatedItems.items}
            spanningRows={calculatedItems.sumUp}
        />
    );
};