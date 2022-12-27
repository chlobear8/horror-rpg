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

  test('should have a max items in inventory', () => {
    const items = new Inventory();
    expect(items.maxItems).toEqual(3);
  });

})