function validarBtn() {
  var numb = document.querySelector("#numb");
  var texto = document.getElementById("txt");
  if (numb.value < 10 || numb.value > 100) {
    alert("[ERRO] Número informado inválido");
  } else {
    alert(`Valor informado: ${numb.value} `);
  }
}
