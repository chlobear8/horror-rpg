import Battleable from "./battleable";

export default class Character extends Battleable {
  constructor(damage, special, health) {
    super(damage, special, health);
    this.level = 1;
  }

  levelUp() {
    this.level += 1;
    this.damage +=1;
    if (this.level % 2 === 0) {
      this.specialTimes += 1;
    }
  }
}