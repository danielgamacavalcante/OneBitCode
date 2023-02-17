const input = document.getElementById("campo");

document
  .getElementById("btnChangeValue")
  .addEventListener("click", function () {
    input.value = "Olá, mundo!";
  });

document.getElementById("btnChangeType").addEventListener("click", function () {
  input.type = input.type !== "text" ? "text" : "radio";
  // input.setAttribute("type", "radio");
});
document
  .getElementById("btnPlaceholder")
  .addEventListener("click", function () {
    input.placeholder = "Digite algo";
  });

let validador = false;
document.getElementById("btnDisable").addEventListener("click", function () {
  if (validador == false) {
    input.disabled = "true";
    validador = true;
  } else if (validador == true) {
    input.removeAttribute("disabled");
    validador = false;
  }
});
document.getElementById("btnVariavel").addEventListener("click", function () {
  const data = input.dataset.valor;
  console.log("O valor do atributo Data é: " + data);
});
