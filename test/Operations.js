const operations = require('../src/operations/Operations.tsx');
var expect = require('expect');

const items = [
  {
      id: 1,
      quantity: 1,
      item: 'Book',
      price: 12.49,
      type: 'Book',
      market: 'Local'
  },
  {
      id: 2,
      quantity: 1,
      item: 'Music CD',
      price: 14.99,
      type: 'GeneralGoods',
      market: 'Local'
  },
  {
      id: 3,
      quantity: 1,
      item: 'Chocolate Bar',
      price: 0.85,
      type: 'Food',
      market: 'Local'
  }
];

describe('Operations', () => {
    it('should properly calculate Items Price', () => {
        operations.calculateItemsPrice(items);
    });
});