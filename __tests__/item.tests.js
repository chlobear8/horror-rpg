import Item from '../src/item';

describe('Item', () => {
  test('create an item object', () => {
    const item = new Item();
    expect(item).toBeInstanceOf(Item);
  });

  test('create a name property', () => {
    const item = new Item("claw");
    expect(item.name).toEqual("claw");
  });

  test('create a damage multiplier property', () => {
    const item = new Item("claw", 3);
    expect(item.damageMultiplier).toEqual(3);
  });

  test('create a special multiplier', () => {
    const item = new Item("claw", 3, 2);
    expect(item.specialMultiplier).toEqual(2);
  })
})