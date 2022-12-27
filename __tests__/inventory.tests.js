import Inventory from '../src/inventory'

describe('Inventory', () => {
  test('should create an inventory object', () => {
    const items = new Inventory();
    expect(items).toBeInstanceOf(Inventory);
  });

  test('should create an empty items array', () => {
    const items = new Inventory();
    expect(items.items).toEqual([]);
  });
})