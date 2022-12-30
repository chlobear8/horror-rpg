import Character from "./character";

export default class CharacterUI {

  buildCharacterUI(character) {
    document.getElementById("health");
    document.getElementById("specAttack");
    document.getElementById("level");
  }
}