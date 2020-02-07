import * as React from 'react';
import {Item} from '../typings/Item';

interface Props {
    items: Item[];
}

function decimalAdjust(value, exp) {
    // If the exp is undefined or zero...
    if (typeof exp === 'undefined' || +exp === 0) {
      return Math.round(value);
    }

    value = +value;
    exp = +exp;

    // If the value is not a number or the exp is not an integer...
    if (isNaN(value) || !(typeof exp === 'number' && exp % 1 === 0)) {
      return NaN;
    }

    // Shift
    value = value.toString().split('e');
    value = Math.round(+(value[0] + 'e' + (value[1] ? (+value[1] - exp) : -exp)));

    // Shift back
    value = value.toString().split('e');
    return +(value[0] + 'e' + (value[1] ? (+value[1] + exp) : exp));
  }

function getPriceAfterTaxes(item: Item) {
    let priceAfterTax = item.price;

    switch (item.type.name) {
        case 'Book':
        case 'Food':
        case 'Medical Product':
            break;
        case 'General Goods': 
            priceAfterTax = decimalAdjust(priceAfterTax + (priceAfterTax * item.type.tax), -1);
            break;
        default:
            break;
    }

    switch (item.market.name) {
        case 'Local':
            break;
        case 'Imported':
            priceAfterTax = decimalAdjust(priceAfterTax + (priceAfterTax * item.market.tax), -1);
            break;
        default:
            break;
    }

    return priceAfterTax;
}

export default function Receipt({items}: Props) {
    return (
        <table>
            <thead>
                <tr>
                    <th>{'Item'}</th>
                    <th>{'Price'}</th>
                    <th>{'Type'}</th>
                    <th>{'Market'}</th>
                    <th>{'Sales Taxes'}</th>
                </tr>
            </thead>
            <tbody>
                {
                    items.length > 0 ? (
                        items.map((item) => {
                            return (
                                <tr key={item.id}>
                                    <td>{item.item}</td>
                                    <td>{item.price}</td>
                                    <td>{item.type.name}</td>
                                    <td>{item.market.name}</td>
                                    <td>{getPriceAfterTaxes(item)}</td>
                                </tr>
                            );
                        })
                    ) : (
                        <tr>
                            <td colSpan={3}>{'No items'}</td>
                        </tr>
                    )
                }
            </tbody>
        </table>
    );
};