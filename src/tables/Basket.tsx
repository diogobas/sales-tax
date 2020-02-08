import * as React from 'react';
import {Item} from '../typings/Item';

interface Props {
    items: Item[];
}

export default function Basket({items}: Props) {
    return (
        <table>
            <thead>
                <tr>
                    <th>{'Item'}</th>
                    <th>{'Type'}</th>
                    <th>{'Market'}</th>
                    <th>{'Price'}</th>
                </tr>
            </thead>
            <tbody>
                {
                    items.length > 0 ? (
                        items.map((item) => {
                            return (
                                <tr key={item.id}>
                                    <td>{item.item}</td>
                                    <td>{item.type.name}</td>
                                    <td>{item.market.name}</td>
                                    <td>{item.price}</td>
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