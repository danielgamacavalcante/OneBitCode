document
  .querySelector("#calculateNumbers")
  .addEventListener("submit", function (ev) {
    ev.preventDefault();
    const number1 = document.querySelector("#number1").value;
    const number2 = document.querySelector("#number2").value;
    const sum = number1 + number2;
    const decrease = number1 - number2;
    const multiplication = number1 * number2;
    const division = number1 / number2;
    alert(
      `Soma: ${sum}\nDiminuição: ${decrease}\nMultiplicação: ${multiplication}\nDivisão: ${division}`
    );
  });
