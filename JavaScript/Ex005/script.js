function createLabel(text, htmlfor) {
  const label = document.createElement("label");
  label.innerText = text;
  label.htmlFor = htmlfor;
  return label;
}

function createInput(id, value, name, type = "text", placeholder = "") {
  const input = document.createElement("input");
  input.id = id;
  input.value = value;
  input.name = name;
  input.type = type;
  input.placeholder = placeholder;
  return input;
}
const form = document.getElementById("#form");
const ul = document.querySelector("#ul");
let cont = 0;
developer = [];

const btnAddDeveloper = document.querySelector("#btnAddTecnology");
btnAddDeveloper.addEventListener("click", function (ev) {
  ev.preventDefault();

  const name = document.getElementById("name").value;
  const inputYears = document.querySelector("#timeService").value;
  if ((name && inputYears) != "") {
    const newRowLi = document.createElement("li");
    const rowIndex = cont;
    cont++;
    newRowLi.id = "inputRow-" + rowIndex;
    newRowLi.className = "inputRow";

    const techNameLabel = createLabel("Nome:", "techName-" + rowIndex);
    const tecNameInput = createInput("techName-" + rowIndex, null, "techName");

    const expLabel = createLabel("Experiência: ");
    let id1 = "expRadio-" + rowIndex + ".1";
    const expRadio1 = createInput(
      id1,
      "0-2 anos",
      "expRadio-" + rowIndex,
      "radio"
    );
    const expLabel1 = createLabel("0-2 anos ", id1);

    let id2 = "expRadio-" + rowIndex + ".2";
    const expRadio2 = createInput(
      id2,
      "3-4 anos",
      "expRadio-" + rowIndex,
      "radio"
    );
    const expLabel2 = createLabel("3-4 anos ", id2);

    let id3 = "expRadio-" + rowIndex + ".3";
    const expRadio3 = createInput(
      id3,
      "5+ anos",
      "expRadio-" + rowIndex,
      "radio"
    );
    const expLabel3 = createLabel("5+ anos ", id3);

    const btnRemove = document.createElement("button");
    btnRemove.type = "button";
    btnRemove.innerText = "Remover";
    btnRemove.addEventListener("click", function remove(ev) {
      ul.removeChild(newRowLi);
    });

    newRowLi.append(
      techNameLabel,
      tecNameInput,
      expLabel,
      expRadio1,
      expLabel1,
      expRadio2,
      expLabel2,
      expRadio3,
      expLabel3,
      btnRemove
    );

    ul.appendChild(newRowLi);
  } else {
    alert("[ERRO] Preencha os campos Nome e Tempo de Serviço");
  }
});

const btnRegister = document.querySelector("#btnRegister");
btnRegister.addEventListener("click", function (ev) {
  ev.preventDefault();
  const nameDeveloper = document.querySelector("#name").value;
  const timeWorking = document.querySelector("#timeService").value;
  if ((nameDeveloper && timeWorking) != "") {
    console.log("Entrou");
    console.log(nameDeveloper, timeWorking);
  }
});
