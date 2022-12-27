import Battleable from "./battleable";

export default class Character extends Battleable {
  constructor(damage, special, health) {
    super(damage, special, health);
    this.level = 1;
  }

  levelUp() {
    this.level += 1;
  }
}