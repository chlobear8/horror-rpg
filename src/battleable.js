export default class Battleable {
  constructor(damage, special, health) {
    this.damage = damage;
    this.special = special;
    this.specialTimes = 4;
    this.health = health;
  }

  attack() {
    return this.damage;
  }

  doesSpecial() {
    this.specialTimes -= 1;
    if (this.specialTimes <= 0) {
      return 0;
    } 
    return this.special;
  }

  takeDamage(damage) {
    this.health -= damage;
  }
}