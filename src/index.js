import EnemyUI from "./enemyUI";
import CharacterUI from "./characterUI";
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Character from "./character";
import FreddyK from "./js/freddy";
import Jason from "./js/jason";
import Michael from "./js/michael";

let character;
function handleCharacterSelectForm(event) {
  event.preventDefault();
  if (document.getElementById("char").value === "freddy") {
    character = new FreddyK();
  } else if (document.getElementById("char").value === "jason") {
    character = new Jason();
  } else
    character = new Michael();
}

function handleCharacterHidden(event) {
  event.preventDefault();
  document.querySelector("div#characterSelectForm").setAttribute("class", "hidden");
  document.querySelector("div#firstBattle").removeAttribute("class", "hidden");
}

window.addEventListener("load", function() {
  this.document.querySelector("#characterSelectForm").addEventListener("submit", handleCharacterSelectForm)
})