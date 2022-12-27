import Inventory from '../src/inventory'
import Item from '../src/item';

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

  test('should add item to inventory', () => {
    const items = new Inventory();
    const item = new Item("claw");
    items.addItem(item);
    expect(items.items).toEqual([item]);
  });
})