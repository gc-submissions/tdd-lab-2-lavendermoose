const cartFunction = require('./../src/js/cart-functions');

describe("calculateChange", () => {
  test('6 - 5 should equal 1', () => {
    expect(cartFunction(5, 6)).toEqual(1);
  });

  test('13.03 - 12.30 should equal 0.73', () => {
    expect(cartFunction(12.3, 13.03)).toEqual(0.73);
  });

  test('100 - 92 should equal 8', () => {
    expect(cartFunction(92, 100)).toEqual(8);
  });
});


describe("isSufficientPayment", () => {
  test('6 - 5 should equal true', () => {
    expect(inSufficientPayment(5, 6)).toEqual(true);
  });
});

describe("calculateTotal", () => {
  test('should return one item with 4.99', () => {
    const mockItemsArray = [{ name: 'Taco', price: 4.99}];
    expect(cartFunction.calculateTotal(mockItemsArray)).toEqual(4.99);
  });

  test('items 3.50, 12.99, 0.03 should return 16.52', () => {
    const mockItemsArray = [
      {name: 'item 1', price: 3.50},
      {name: 'item 2', price: 12.99},
      {name: 'item 3', price: 0.03}
    ];
    expect(cartFunction.calculateTotal(mockItemsArray)).toEqual(16.52);
});

describe("addItem", () => {
  test.todo("add addItem tests here");
});

describe("removeItem", () => {
  test.todo("add removeItem tests here");
});