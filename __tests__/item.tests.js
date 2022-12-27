import Item from '../src/item';

describe('Item', () => {
  test('create an item object', () => {
    const item = new Item();
    expect(item).toBeInstanceOf(Item);
  });

  test('create a name property', () => {
    const item = new Item();
    expect(item.name).toEqual(claws);
  })
})