const expect = require('expect');
const operations = require('../src/operations/Operations.tsx');

describe('Operations', () => {

	it('should properly calculate Items Price', () => {
		const items = [
				{
					id: 1,
					quantity: 1,
					item: 'Book',
					price: 12.49,
					type: {
						name: 'Book',
						tax: 0
					},
					market: {
						name: 'Local',
						tax: 0
					}
				}
			],
			expectedResults = {
				items: [
					{
						id: 1,
						quantity: 1,
						item: 'Book',
						price: 12.49,
						type: {
							name: 'Book',
							tax: 0
						},
						market: {
							name: 'Local',
							tax: 0
						}
					}
				],
				sumUp: {
					total: 12.49,
					salesTaxes: 0
				}
			},
			results = operations.calculateItemsPrice(items);

        expect(expectedResults).toStrictEqual(results);
    });
});