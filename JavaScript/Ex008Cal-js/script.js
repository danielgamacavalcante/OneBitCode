const main = document.getElementById("main");
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
document.querySelectorAll(".charKey").forEach(function (charKeyBtn) {
  input.addEventListener("click", function () {
    const value = charKeyBtn.dataset.value;
    input.value += value;
  });
});

input.addEventListener("keydown", function (ev) {
  ev.preventDefault();
  if (allowedKeys.includes(ev.key)) {
    input.value += ev.key;
    return;
  }
  if (ev.key === "Backspace") {
    input.value = input.value.slice(0, -1);
  }
  if (ev.key === "Enter") {
    calculator();
  }
});

function calculator() {
  console.log("Nice");
}
