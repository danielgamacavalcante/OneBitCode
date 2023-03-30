const resultInput = document.querySelector("#result");
let value;
export function calculator() {
  const result = eval(input.value);
  if (result == null || result == undefined || result == " ") {
    resultInput.value = "ERROR";
    resultInput.classList.add("error");
  } else {
    resultInput.classList.remove("error");
    resultInput.value = result;
  }
}

export function copy(ev) {
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
}
