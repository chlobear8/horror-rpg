import Character from "./character";

export default class Enemy extends Character {
  constructor(damage, special, health) {
    super(damage, special, health);
  }
}