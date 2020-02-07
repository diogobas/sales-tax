import * as React from 'react';
import {Item} from '../SalexTax';

interface Props {
    addItem: (item: Item) => void;
}

export default function AddItemForm({addItem}: Props) {
    const initialFormState: Item = {
        id: null,
        item: '',
        price: 0
    };
    const [item, setItem] = React.useState(initialFormState);

    function handleInputChange(event) {
        const {name, value} = event.target;

        setItem({
            ...item,
            [name]: value
        });
    }

    function handleSubmit(event) {
        event.preventDefault();

        if (!item.item || !item.price) {
            return;
        }

        addItem(item);
        setItem(initialFormState);
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>{'Item'}</label>
            <input type='text' name='item' value={item.item} onChange={handleInputChange} />
            <label>{'Price'}</label>
            <input type='text' name='price' value={item.price} onChange={handleInputChange} />
            <button>{'Add new Item'}</button>
        </form>
    );
}