const main = document.querySelector("main");
const input = document.querySelector("#input");
const root = document.querySelector(":root");
const resultInput = document.querySelector("#result");

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
let value;
document
  .querySelector("#copyToClipboard")
  .addEventListener("click", function (ev) {
    const button = ev.currentTarget;

    if (button.innerText == "Copy") {
      button.innerText = "Copied!";
      button.classList.add("success");
      navigator.clipboard.writeText(resultInput.value);
      value = resultInput.value;
    } else {
      button.innerText = "Copy";
      if (resultInput.value == value) {
        resultInput.value = "";
      }
      button.classList.remove("success");
    }
  });
// Mudando Tema
document.querySelector("#themeSwitcher").addEventListener("click", function () {
  if (main.dataset.theme === "dark") {
    root.style.setProperty("--bg-color", "#f1f5f9");
    root.style.setProperty("--border-color", "#aaa");
    root.style.setProperty("--font-color", "#212529");
    root.style.setProperty("--primary-color", "#26834a");
    main.dataset.theme = "light";
  } else {
    root.style.setProperty("--bg-color", "#212529");
    root.style.setProperty("--border-color", "#666");
    root.style.setProperty("--font-color", "#f1f5f9");
    root.style.setProperty("--primary-color", "#4dff91");
    main.dataset.theme = "dark";
  }
});
// click nos números e operadores
document.querySelectorAll(".charKey").forEach(function (charKeyBtn) {
  charKeyBtn.addEventListener("click", function () {
    const value = charKeyBtn.dataset.value;
    input.value += value;
    input.focus();
  });
});
// função de limpar o campo input
document.querySelector("#clear").addEventListener("click", function () {
  input.value = " ";
});
// ao pressionar o botão, vai ver se está includio na lista este botão e caso esteja vai adicionar a saída do input
input.addEventListener("keydown", function (ev) {
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
});
//se clicar no igual calcula
document.getElementById("equal").addEventListener("click", calculator);
function calculator() {
  const result = eval(input.value);
  if (result == null || result == undefined || result == " ") {
    resultInput.value = "ERROR";
    resultInput.classList.add("error");
  } else {
    resultInput.classList.remove("error");
    resultInput.value = result;
  }
}
