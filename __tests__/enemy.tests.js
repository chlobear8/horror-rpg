import Enemy from '../src/enemy';
import Character from '../src/character';

describe('Enemy', () => {
  test('should create enemy object', () => {
    const enemy = new Enemy(4, 4, 4);
    expect(enemy).toBeInstanceOf(Enemy);
  });

  test('should do damage', () => {
    const enemy = new Enemy(4, 4, 4);
    expect(enemy.attack()).toEqual(4);
  });

  test('enemy should do damage to character', () => {
    const enemy = new Enemy(4, 4, 4);
    const player = new Character(4, 4, 10);
    player.takeDamage(enemy.attack());
    expect(player.health).toEqual(6);
  })
})