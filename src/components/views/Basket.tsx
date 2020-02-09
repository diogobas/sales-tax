import * as React from 'react';
import {Item} from '../../typings/Item';
import SpanningTable from '../dataDisplay/SpanningTable';

interface Props {
    items: Item[];
}

export default function Basket({items}: Props) {
    return (
        <SpanningTable
            items={items}
        /> 
    );
};