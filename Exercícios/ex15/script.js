import { calculator, copy } from "./calculator.js";
import { charkey, clear, handleTyping } from "./keys.js";
import themeSwicht from "./theme.js";

const input = document.querySelector("#input");

let value;
document.querySelector("#copyToClipboard").addEventListener("click", copy);
// Mudando Tema
document.querySelector("#themeSwitcher").addEventListener("click", themeSwicht);
// click nos números e operadores
document.querySelectorAll(".charKey").forEach(function (charKeyBtn) {
  charKeyBtn.addEventListener("click", charkey);
});
// função de limpar o campo input
document.querySelector("#clear").addEventListener("click", clear);
// ao pressionar o botão, vai ver se está includio na lista este botão e caso esteja vai adicionar a saída do input
input.addEventListener("keydown", handleTyping);
//se clicar no igual calcula
document.getElementById("equal").addEventListener("click", calculator);
