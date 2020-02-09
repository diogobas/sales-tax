import * as React from 'react';
import {Item} from '../typings/Item';

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

export default function Receipt({items}: Props) {
    let total = 0,
        salesTaxes = 0;

    return (
        <table>
            <thead>
                <tr>
                    <th>{'Quantity'}</th>
                    <th>{'Item'}</th>
                    <th>{'Market'}</th>
                    <th>{'Type'}</th>
                    <th>{'Final Price'}</th>
                </tr>
            </thead>
            <tbody>
                {
                    items.map((item) => {
                        const priceAfterTax = getCalculatedTax(item);

                        total += priceAfterTax;
                        salesTaxes += priceAfterTax - item.price; 

                        return (
                            <tr key={item.id}>
                                <td>{item.quantity}</td>
                                <td>{item.item}</td>
                                <td>{item.market.name}</td>
                                <td>{item.type.name}</td>
                                <td>{priceAfterTax.toFixed(2)}</td>
                            </tr>
                        );
                    })
                }
                <tr>
                    <td colSpan={4}><b>{'Sales Taxes'}</b></td>
                    <td>{salesTaxes.toFixed(2)}</td>
                </tr>
                <tr>
                    <td colSpan={4}><b>{'Total'}</b></td>
                    <td>{total.toFixed(2)}</td>
                </tr>
            </tbody>
        </table>
    );
};