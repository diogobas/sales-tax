import * as React from 'react';
import {Item} from '../../typings/Item';
import SpanningTable from '../dataDisplay/SpanningTable';
import {calculateItemsPrice} from '../operations/Operations';

interface Props {
    items: Item[];
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