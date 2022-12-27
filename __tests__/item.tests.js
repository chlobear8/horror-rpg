import Item from '../src/item';

describe('Item', () => {
  test('create an item object', () => {
    const item = new Item();
    expect(item).toBeInstanceOf(Item);
  })
})