const arrPatient = ["jose", "antonio"];
let textAreaPatient = document.querySelector("#listPatient");
let newName = document.querySelector("#newPatient");
let queryName = document.querySelector("#queryPatient");
function update() {
  if ((textAreaPatient.value = "")) {
    for (let i = 0; i < arrPatient.length; i++) {
      textAreaPatient.value += `${i + 1}º ${arrPatient[i]}\n`;
    }
  } else {
    textAreaPatient.value = "";
    for (let i = 0; i < arrPatient.length; i++) {
      textAreaPatient.value += `${i + 1}º ${arrPatient[i]}\n`;
    }
  }
}
window.addEventListener("load", function () {
  update();
});

document
  .querySelector("#btnNewPatient")
  .addEventListener("click", function (ev) {
    ev.preventDefault();
    if (newName.value != "") {
      arrPatient.push(newName.value);
      update();
      newName.value = "";
    } else {
      alert("[ALERTA] Preencha o campo novo paciente!");
    }
  });
document
  .querySelector("#btnQueryPatient")
  .addEventListener("click", function (ev) {
    ev.preventDefault();

    const include = arrPatient.includes(queryName.value);
    let index = arrPatient.indexOf(queryName.value);
    if (include === true) {
      alert(
        `Paciente "${queryName.value}" encontrado, na posição ${index + 1}!`
      );
      queryName.value = "";
    } else {
      alert(`"${queryName.value}" não encontrado no registro.`);
      queryName.value = "";
    }
  });
document.querySelector("#out").addEventListener("click", function (ev) {
  ev.preventDefault();
  newName.setAttribute("disabled", "disabled");
  queryName.setAttribute("disabled", "disabled");
});
