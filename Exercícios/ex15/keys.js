const input = document.querySelector("#input");
const allowedKeys = [
  "(",
  ")",
  "/",
  "*",
  "+",
  "-",
  "9",
  "8",
  "7",
  "6",
  "5",
  "4",
  "3",
  "2",
  "1",
  "0",
  ".",
  "%",
  " ",
];
export function charkey(ev) {
  const value = ev.currentTarget.dataset.value;
  input.value += value;
  input.focus();
}
export function clear() {
  input.value = " ";
}

export function handleTyping(ev) {
  ev.preventDefault();
  if (allowedKeys.includes(ev.key)) {
    // adiciona nos operadores espaços nas laterais
    if (
      ev.key == "/" ||
      ev.key == "-" ||
      ev.key == "+" ||
      ev.key == "*" ||
      ev.key == "%"
    ) {
      input.value += " " + ev.key + " ";
    } else {
      input.value += ev.key;
    }
    return;
  }
  // se o botão pressionado for o botão de apagar vai apagar
  if (ev.key === "Backspace") {
    // if para analisar o espaço dos operadores para apagar 3 caracteres de uma vez
    if (input.value.lastIndexOf(" ") == input.value.length - 1) {
      input.value = input.value.slice(0, -3);
    } else {
      input.value = input.value.slice(0, -1);
    }
  }
  //Se pressionar enter calcula
  if (ev.key === "Enter") {
    calculator();
  }
}
