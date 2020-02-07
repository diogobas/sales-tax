import * as React from 'react';
import {Item} from '../SalexTax';


interface Props {
    items: Item[];
}

export default function Receipt({items}: Props) {
    return (
        <table>
            <thead>
                <tr>
                    <th>{'Item'}</th>
                    <th>{'Price'}</th>
                    <th>{'Actions'}</th>
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
                                    <td>
                                        <button className="button muted-button">{'Edit'}</button>
                                    </td>
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