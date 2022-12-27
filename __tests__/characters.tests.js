import Character from '../src/character';

describe('Character', () => {
  test('should create a character object', () => {
    const player = new Character();
    expect(player).toBeInstanceOf(Character);
  });

  test('should set properties on class', () => {
    const player = new Character(4, 4, 4);
    expect(player.health).toEqual(4);
    expect(player.damage).toEqual(4);
    expect(player.special).toEqual(4);
  });

  test('should do damage', () => {
    const player = new Character(4, 4, 4);
    expect(player.attack()).toEqual(4);
  });

  test('should return special damage if has special count', () => {
    const player = new Character(4, 4, 4);
    expect(player.doesSpecial()).toEqual(4);
  });

  test('should lower special count on use', () => {
    const player = new Character(4, 4, 4);
    player.doesSpecial();
    expect(player.specialTimes).toEqual(3);
  });

  test('should return 0 when all spcials are used', () => {
    const player = new Character(4, 4, 4);
    player.doesSpecial();
    player.doesSpecial();
    player.doesSpecial();
    player.doesSpecial();
    expect(player.doesSpecial()).toEqual(0);
  });
})