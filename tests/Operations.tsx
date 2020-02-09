const expect = require('expect');
const operations = require('../src/operations/Operations.tsx');

function ccyFormat(num: number) {
    return num.toFixed(2);
}

describe('Operations', () => {
	describe('calculateItemsPrice method', () => {
		it('should properly return the item with the prices calculated', () => {
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
		
	describe('calculateItemsPrice method', () => {
		describe('Mainly Operations', () => {
			it('should properly calculate the tax from a tax exemption item', () => {
				const item = {
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
					},
					expectedResult = 12.49,
					results = operations.getCalculatedTax(item);

				expect(expectedResult).toEqual(results);
			});
			
			it('should properly calculate the tax from a General Goods taxed item', () => {
				const item = {
						id: 1,
						quantity: 1,
						item: 'Music CD',
						price: 14.99,
						type: {
							name: 'General Goods',
							tax: .10
						},
						market: {
							name: 'Local',
							tax: 0
						}
					},
					expectedResult = 16.49,
					results = operations.getCalculatedTax(item);

				expect(ccyFormat(expectedResult)).toEqual(ccyFormat(results));
			});
			
			it('should properly calculate the tax from an item that is an exemption, but Imported', () => {
				const item = {
						id: 1,
						quantity: 1,
						item: 'Music CD',
						price: 10,
						type: {
							name: 'Food',
							tax: 0
						},
						market: {
							name: 'Imported',
							tax: .05
						}
					},
					expectedResult = 10.50,
					results = operations.getCalculatedTax(item);

				expect(ccyFormat(expectedResult)).toEqual(ccyFormat(results));
			});
			
			it('should properly calculate the tax from an Imported non exemption taxed item', () => {
				const item = {
						id: 1,
						quantity: 1,
						item: 'Bottle of Perfume',
						price: 47.50,
						type: {
							name: 'General Goods',
							tax: .1
						},
						market: {
							name: 'Imported',
							tax: .05
						}
					},
					expectedResult = 54.65,
					results = operations.getCalculatedTax(item);

				expect(ccyFormat(expectedResult)).toEqual(ccyFormat(results));
			});
		});
		describe('Secondary Operations', () => {
			it('should properly calculate the tax from 2 products from a tax exemption item', () => {
				const item = {
						id: 1,
						quantity: 2,
						item: 'Book',
						price: 5.00,
						type: {
							name: 'Book',
							tax: 0
						},
						market: {
							name: 'Local',
							tax: 0
						}
					},
					expectedResult = 10.00,
					results = operations.getCalculatedTax(item);

				expect(expectedResult).toEqual(results);
			});

			it('should properly calculate the tax from 2 products of a General Goods taxed item', () => {
				const item = {
						id: 1,
						quantity: 2,
						item: 'Music CD',
						price: 15.00,
						type: {
							name: 'General Goods',
							tax: .10
						},
						market: {
							name: 'Local',
							tax: 0
						}
					},
					expectedResult = 33.00,
					results = operations.getCalculatedTax(item);

				expect(ccyFormat(expectedResult)).toEqual(ccyFormat(results));
			});

			it('should properly calculate the tax from 2 products from an item that is exemptions, but Imported', () => {
				const item = {
						id: 1,
						quantity: 2,
						item: 'Music CD',
						price: 6.99,
						type: {
							name: 'Food',
							tax: 0
						},
						market: {
							name: 'Imported',
							tax: .05
						}
					},
					expectedResult = 14.68,
					results = operations.getCalculatedTax(item);

				expect(ccyFormat(expectedResult)).toEqual(ccyFormat(results));
			});

			it('should properly calculate the tax from 2 products from an Imported non exemption taxed item', () => {
				const item = {
						id: 1,
						quantity: 2,
						item: 'Bottle of Perfume',
						price: 102.11,
						type: {
							name: 'General Goods',
							tax: .1
						},
						market: {
							name: 'Imported',
							tax: .05
						}
					},
					expectedResult = 234.92,
					results = operations.getCalculatedTax(item);

				expect(ccyFormat(expectedResult)).toEqual(ccyFormat(results));
			});
		});
	});
});