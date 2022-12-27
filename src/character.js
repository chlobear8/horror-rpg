export default class Character {
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
    return this.special;
  }
}