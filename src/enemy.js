import Battleable from "./battleable";

export default class Enemy extends Battleable {
  constructor(damage, special, health) {
    super(damage, special, health);
    this.specialTimes = 2;
  }
}