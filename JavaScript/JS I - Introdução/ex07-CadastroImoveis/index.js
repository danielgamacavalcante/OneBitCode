const textArea = document.querySelector("#textAreaImmobile");

document.querySelector("#btnExit").addEventListener("click", function (ev) {
  ev.preventDefault();
  let save = document.querySelector("#btnSaveImmobile");
  textArea.style = "visibility: hidden";
  save.style = "visibility: hidden";
});
const immobiles = [];

document
  .querySelector("#btnSaveImmobile")
  .addEventListener("click", function (element) {
    element.preventDefault();
    textArea.value = "";
    const immobile = {};
    const ownerName = document.getElementById("ownerName");
    const inputRooms = document.getElementById("numberOfRooms");
    const inputBathrooms = document.querySelector("#numberOfBathrooms");
    const garage = document.querySelector("input[name=garage]:checked").value;

    immobile.name = ownerName.value;
    immobile.rooms = inputRooms.value;
    immobile.bathrooms = inputBathrooms.value;
    immobile.garageExist = garage;

    immobiles.push(immobile);
    console.log(immobiles);
    for (let i = 0; i < immobiles.length; i++) {
      const owner = immobiles[i];
      textArea.value += `${i + 1}º Proprietário: ${
        owner.name
      }, Quantidade de Quartos: ${owner.rooms}, Quantidade de Banheirso:${
        owner.bathrooms
      },Tem garagem:${owner.garageExist}\n`;
    }

    ownerName.value = "";
    inputRooms.value = "";
  });
