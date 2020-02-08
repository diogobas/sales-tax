import * as React from 'react';
import {Item} from '../typings/Item';

interface Props {
    items: Item[];
}

function roundOffTax(price: number) {
    return (price / 0.05 + 0.5) * 0.05;
}

function getCalculatedTax(item: Item) {
    let priceAfterTax = item.price;
    const regularTax = item.type.tax,
        importedTax = item.market.tax;

    switch (item.type.name) {
        case 'Book':
        case 'Food':
        case 'Medical Product':
            break;
        case 'General Goods': {
            if (item.market.name === 'Local') {
                priceAfterTax = priceAfterTax + priceAfterTax * regularTax;
            } else {
                priceAfterTax = roundOffTax(priceAfterTax + priceAfterTax * (regularTax + importedTax));
            }
        }
            
            break;
        default:
            break;
    }

    return priceAfterTax;
}

export default function Receipt({items}: Props) {
    let total = 0,
        salesTaxes = 0;

    return (
        <table>
            <thead>
                <tr>
                    <th>{'Item'}</th>
                    <th>{'Type'}</th>
                    <th>{'Market'}</th>
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
                                <td>{item.item}</td>
                                <td>{item.type.name}</td>
                                <td>{item.market.name}</td>
                                <td>{priceAfterTax}</td>
                            </tr>
                        );
                    })
                }
                <tr>
                    <td colSpan={3}>{'Sales Taxes'}</td>
                    <td>{roundOffTax(salesTaxes)}</td>
                </tr>
                <tr>
                    <td colSpan={3}>{'Total'}</td>
                    <td>{roundOffTax(total)}</td>
                </tr>
            </tbody>
        </table>
    );
};