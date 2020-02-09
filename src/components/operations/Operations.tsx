type Tax = {
    name: string;
    tax: number;
}

interface Item {
    id: number;
    quantity: number;
    item: string;
    price: number;
    type: Tax;
    market: Tax;
}

export function calculateTax(price: number, rate: number) {
    //sales tax are that for a tax rate of n%, a shelf price of p contains (np/100)
    let tax = (price * rate);

    //The rounding rules: rounded up to the nearest 0.05
    tax = Math.ceil(tax / 0.05) * 0.05;

    return tax;
}

export function getCalculatedTax(item: Item) {
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
            }
            break;
        case 'General Goods': 
            if (item.market.name === 'Local') {
                tax = calculateTax(item.price, regularTax);
            } else {
                tax = calculateTax(item.price, regularTax + importedTax);
            }
            break;
        default:
            break;
    }

    priceAfterTax = tax + item.price;

    return item.quantity * priceAfterTax;
}


export function calculateItemsPrice(items: Item[]) {
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