import Character from '../src/character';

describe('Character', () => {
  test('should create a character object', () => {
    const player = new Character();
    expect(player).toBeInstanceOf(Character);
  });

  test('should set properties on class', () => {
    const player = new Character(4, 4, 4);
    expect(player.health).toEqual(4);
  });
})