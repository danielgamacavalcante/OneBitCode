document.querySelector("#orderForm").addEventListener("submit", function (ev) {
  ev.preventDefault();
  const name = document.querySelector("input[name='name']").value;
  const date = document.querySelector("#date").value;
  const fildOfStudy = document.querySelector("#fildOfStudy").value;
  let array = date.split("-");
  const today = new Date(Date.now()).toLocaleString().split(",")[0];
  let arrayToDay = today.split("/");
  let yearNow = arrayToDay[2];
  let yearBirthday = array[0];
  let age = undefined;
  if (arrayToDay[1] > array[1]) {
    console.log("entrou");
    age = yearNow - yearBirthday;
  } else {
    if (arrayToDay[0] > array[2]) {
      age = yearNow - yearBirthday;
    } else {
      age = yearNow - yearBirthday;
      --age;
    }
  }

  alert(`Nome: ${name}\nCampo selecionado:  ${fildOfStudy}\nIdade: ${age}`);
});
