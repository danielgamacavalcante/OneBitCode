const newClient = [];
const imcElement = document.getElementById("imc");
let imcValue;
let rcqValue;
let percenteGValue;
let id = undefined;
const height = document.getElementById("altura");
const weight = document.getElementById("peso");
const quadrilC = document.getElementById("quadril");
const cinturaC = document.getElementById("cintura");
const sexy = document.getElementById("sexy");
const oldYears = document.getElementById("oldYears");
const rcqElement = document.getElementById("rcq");
const percenteGoduraD = document.getElementById("gordura");
const subescapulaD = document.getElementById("subescapulaD");
const coxaD = document.getElementById("coxaD");
const suprailiacaD = document.getElementById("suprailiacaD");
const abdomenD = document.getElementById("abdomenD");
const axilaD = document.getElementById("axilaD");
const bicepsD = document.getElementById("bicepsD");
const tricepsD = document.getElementById("tricepsD");
const peitoralD = document.getElementById("peitoralD");

// coxaD.addEventListener("mouseover", function () {
//   coxaD.setAttribute("");
// });

function imc() {
  if (oldYears.value <= 59) {
    if (
      (weight !== "" || weight !== undefined) &&
      (height.value !== "" || height.value !== undefined)
    ) {
      imcValue = weight.value / (height.value * height.value);
      console.log("imc:" + imcValue);
      if (imcValue <= 18.5) {
        imcElement.value = "Abaixo do peso normal";
      } else if (imcValue >= 18.5 && imcValue <= 24.9) {
        imcElement.value = "Peso Normal";
      } else if (imcValue >= 25 && imcValue <= 29.9) {
        imcElement.value = "Excesso de Peso";
      } else if (imcValue >= 30 && imcValue <= 34.9) {
        imcElement.value = "Obesidade Classe 1";
      } else if (imcValue >= 35 && imcValue <= 39.9) {
        imcElement.value = "Obesidade Classe 2";
      } else if (imcValue >= 40) {
        imcElement.value = "Obesidade Classe 3";
      }
      console.log(imcValue);
    } else {
      alert("[ERRO] - Preencha os campos do IMC");
    }
  } else if (oldYears.value >= 60) {
    if (
      (weight !== "" || weight !== undefined) &&
      (height.value !== "" || height.value !== undefined)
    ) {
      imcValue = weight.value / (height.value * height.value);
      console.log("imc:" + imcValue);
      if (imcValue < 22) {
        imcElement.value = "Baixo Peso";
      } else if (imcValue >= 22 && imcValue <= 27) {
        imcElement.value = "Peso Normal (Eutrófico)";
      } else if (imcValue > 27) {
        imcElement.value = "Excesso de Peso";
      }
    }
  }
}
function percentGordura() {
  if (
    sexy.value == "Mulher" ||
    sexy.value == "Feminino" ||
    sexy.value == "F" ||
    sexy.value == "feminino"
  ) {
    console.log("entrou if");
    if (subescapulaD.value !== "" && subescapulaD.value !== undefined) {
      let seteDobras =
        parseInt(coxaD.value) +
        parseInt(suprailiacaD.value) +
        parseInt(peitoralD.value) +
        parseInt(abdomenD.value) +
        parseInt(axilaD.value) +
        parseInt(tricepsD.value) +
        parseInt(subescapulaD.value);
      console.log(seteDobras);
      let dc =
        1.112 -
        0.00043499 * seteDobras +
        0.00000055 * seteDobras * 2 -
        0.00028826 * oldYears.value;
      percenteGValue = 495 / dc - 450;

      if (oldYears.value >= 17 && oldYears.value <= 25) {
        console.log("Percentual de Gordura:" + percenteGValue);
        if (percenteGValue >= 13 && percenteGValue <= 16) {
          percenteGoduraD.value = "Excelente";
        }
        if (percenteGValue >= 17 && percenteGValue <= 19) {
          percenteGoduraD.value = "Bom";
        }
        if (percenteGValue >= 20 && percenteGValue <= 22) {
          percenteGoduraD.value = "Média";
        }
        if (percenteGValue >= 23 && percenteGValue <= 25) {
          percenteGoduraD.value = "Acima da Média";
        }
        if (percenteGValue >= 26 && percenteGValue <= 28) {
          percenteGoduraD.value = "Abaixo da Média";
        }
        if (percenteGValue >= 29 && percenteGValue <= 31) {
          percenteGoduraD.value = "Ruim";
        }
        if (percenteGValue >= 33 || percenteGValue >= 43) {
          percenteGoduraD.value = "Muito Ruim";
        }
      }

      if (oldYears.value >= 26 && oldYears.value <= 35) {
        console.log("Percentual de Gordura:" + percenteGValue);
        if (percenteGValue >= 14 && percenteGValue <= 17) {
          percenteGoduraD.value = "Excelente";
        }
        if (percenteGValue >= 18 && percenteGValue <= 20) {
          percenteGoduraD.value = "Bom";
        }
        if (percenteGValue >= 21 && percenteGValue <= 23) {
          percenteGoduraD.value = "Média";
        }
        if (percenteGValue >= 24 && percenteGValue <= 26) {
          percenteGoduraD.value = "Acima da Média";
        }
        if (percenteGValue >= 27 && percenteGValue <= 30) {
          percenteGoduraD.value = "Abaixo da Média";
        }
        if (percenteGValue >= 31 && percenteGValue <= 35) {
          percenteGoduraD.value = "Ruim";
        }
        if (percenteGValue >= 36 || percenteGValue >= 49) {
          percenteGoduraD.value = "Muito Ruim";
        }
      }
      if (oldYears.value >= 36 && oldYears.value <= 45) {
        console.log("Percentual de Gordura:" + percenteGValue);
        if (percenteGValue >= 16 && percenteGValue <= 19) {
          percenteGoduraD.value = "Excelente";
        }
        if (percenteGValue >= 20 && percenteGValue <= 23) {
          percenteGoduraD.value = "Bom";
        }
        if (percenteGValue >= 24 && percenteGValue <= 26) {
          percenteGoduraD.value = "Média";
        }
        if (percenteGValue >= 27 && percenteGValue <= 29) {
          percenteGoduraD.value = "Acima da Média";
        }
        if (percenteGValue >= 30 && percenteGValue <= 32) {
          percenteGoduraD.value = "Abaixo da Média";
        }
        if (percenteGValue >= 33 && percenteGValue <= 37) {
          percenteGoduraD.value = "Ruim";
        }
        if (percenteGValue >= 38 || percenteGValue >= 48) {
          percenteGoduraD.value = "Muito Ruim";
        }
      }
      if (oldYears.value >= 46 && oldYears.value <= 55) {
        console.log("Percentual de Gordura:" + percenteGValue);
        if (percenteGValue >= 17 && percenteGValue <= 21) {
          percenteGoduraD.value = "Excelente";
        }
        if (percenteGValue >= 23 && percenteGValue <= 25) {
          percenteGoduraD.value = "Bom";
        }
        if (percenteGValue >= 26 && percenteGValue <= 28) {
          percenteGoduraD.value = "Média";
        }
        if (percenteGValue >= 29 && percenteGValue <= 31) {
          percenteGoduraD.value = "Acima da Média";
        }
        if (percenteGValue >= 32 && percenteGValue <= 34) {
          percenteGoduraD.value = "Abaixo da Média";
        }
        if (percenteGValue >= 35 && percenteGValue <= 38) {
          percenteGoduraD.value = "Ruim";
        }
        if (percenteGValue >= 39 || percenteGValue >= 50) {
          percenteGoduraD.value = "Muito Ruim";
        }
      }
      if (oldYears.value >= 56 && oldYears.value <= 65) {
        console.log("Percentual de Gordura:" + percenteGValue);
        if (percenteGValue >= 18 && percenteGValue <= 22) {
          percenteGoduraD.value = "Excelente";
        }
        if (percenteGValue >= 24 && percenteGValue <= 26) {
          percenteGoduraD.value = "Bom";
        }
        if (percenteGValue >= 27 && percenteGValue <= 29) {
          percenteGoduraD.value = "Média";
        }
        if (percenteGValue >= 30 && percenteGValue <= 32) {
          percenteGoduraD.value = "Acima da Média";
        }
        if (percenteGValue >= 33 && percenteGValue <= 35) {
          percenteGoduraD.value = "Abaixo da Média";
        }
        if (percenteGValue >= 36 && percenteGValue <= 38) {
          percenteGoduraD.value = "Ruim";
        }
        if (percenteGValue >= 39 || percenteGValue >= 49) {
          percenteGoduraD.value = "Muito Ruim";
        }
      }
    } else {
      alert("[ERRO] -  PREENCHA TODOS OS CAMPOS DE DOBRAS!");
    }
  }
  if (
    sexy.value == "Homem" ||
    sexy.value == "Masculino" ||
    sexy.value == "H" ||
    sexy.value == "masculino"
  ) {
    if (subescapulaD.value !== "" && subescapulaD.value !== undefined) {
      let seteDobras =
        parseInt(coxaD.value) +
        parseInt(suprailiacaD.value) +
        parseInt(peitoralD.value) +
        parseInt(abdomenD.value) +
        parseInt(axilaD.value) +
        parseInt(tricepsD.value) +
        parseInt(subescapulaD.value);
      console.log(seteDobras);
      let dc =
        1.112 -
        0.00043499 * seteDobras +
        0.00000055 * seteDobras * 2 -
        0.00028826 * oldYears.value;
      percenteGValue = 495 / dc - 450;

      if (oldYears.value >= 18 && oldYears.value <= 25) {
        console.log("Percentual de Gordura:" + percenteGValue);
        if (percenteGValue >= 4 && percenteGValue <= 7) {
          percenteGoduraD.value = "Excelente";
        }
        if (percenteGValue >= 8 && percenteGValue <= 11) {
          percenteGoduraD.value = "Bom";
        }
        if (percenteGValue >= 12 && percenteGValue <= 13) {
          percenteGoduraD.value = "Média";
        }
        if (percenteGValue >= 14 && percenteGValue <= 16) {
          percenteGoduraD.value = "Acima da Média";
        }
        if (percenteGValue >= 17 && percenteGValue <= 20) {
          percenteGoduraD.value = "Abaixo da Média";
        }
        if (percenteGValue >= 20 && percenteGValue <= 24) {
          percenteGoduraD.value = "Ruim";
        }
        if (percenteGValue >= 26 || percenteGValue >= 36) {
          percenteGoduraD.value = "Muito Ruim";
        }
      }

      if (oldYears.value >= 26 && oldYears.value <= 35) {
        console.log("Percentual de Gordura:" + percenteGValue);
        if (percenteGValue >= 8 && percenteGValue <= 11) {
          percenteGoduraD.value = "Excelente";
        }
        if (percenteGValue >= 12 && percenteGValue <= 15) {
          percenteGoduraD.value = "Bom";
        }
        if (percenteGValue >= 16 && percenteGValue <= 18) {
          percenteGoduraD.value = "Média";
        }
        if (percenteGValue >= 19 && percenteGValue <= 21) {
          percenteGoduraD.value = "Acima da Média";
        }
        if (percenteGValue >= 22 && percenteGValue <= 24) {
          percenteGoduraD.value = "Abaixo da Média";
        }
        if (percenteGValue >= 25 && percenteGValue <= 27) {
          percenteGoduraD.value = "Ruim";
        }
        if (percenteGValue >= 28 || percenteGValue >= 36) {
          percenteGoduraD.value = "Muito Ruim";
        }
      }
    } else {
      alert("[ERRO] -  PREENCHA TODOS OS CAMPOS DE DOBRAS!");
    }
  }
}
function rcq() {
  console.log("entrou");
  console.log(oldYears.value);
  console.log(sexy.value);
  if (
    sexy.value == "Mulher" ||
    sexy.value == "Feminino" ||
    sexy.value == "F" ||
    sexy.value == "feminino"
  ) {
    console.log("entrou if");
    if (quadrilC.value !== "" && quadrilC.value !== undefined) {
      if (oldYears.value >= 15 && oldYears.value <= 19) {
        console.log("entrou if 2");
        rcqValue = cinturaC.value / quadrilC.value;
        console.log("RCQ:" + rcqValue);
        if (oldYears.value == 15) {
          if (rcqValue <= 0.73) {
            rcqElement.value = "Baixo Risco";
          }
          if (rcqValue >= 0.74 && rcqValue <= 0.8) {
            rcqElement.value = "Moderado";
          }
          if (rcqValue >= 0.81 || rcqValue >= 0.85) {
            rcqElement.value = "Alto Risco";
          }
        }

        if (oldYears.value == 16) {
          if (rcqValue <= 0.75) {
            rcqElement.value = "Baixo Risco";
          }
          if (rcqValue >= 0.76 && rcqValue <= 0.81) {
            rcqElement.value = "Moderado";
          }
          if (rcqValue >= 0.82 || rcqValue >= 0.86) {
            rcqElement.value = "Alto Risco";
          }
        }
        if (oldYears.value == 17) {
          console.log("entrou if 3");
          if (rcqValue <= 0.76) {
            rcqElement.value = "Baixo Risco";
          }
          if (rcqValue >= 0.77 && rcqValue <= 0.82) {
            rcqElement.value = "Moderado";
          }
          if (rcqValue >= 0.83 || rcqValue >= 0.87) {
            rcqElement.value = "Alto Risco";
          }
        }
        if (oldYears.value == 18) {
          if (rcqValue <= 0.77) {
            rcqElement.value = "Baixo Risco";
          }
          if (rcqValue >= 0.78 && rcqValue <= 0.83) {
            rcqElement.value = "Moderado";
          }
          if (rcqValue >= 0.84 || rcqValue >= 0.88) {
            rcqElement.value = "Alto Risco";
          }
        }
        if (oldYears.value == 19) {
          if (rcqValue <= 0.79) {
            rcqElement.value = "Baixo Risco";
          }
          if (rcqValue >= 0.8 && rcqValue <= 0.84) {
            rcqElement.value = "Moderado";
          }
          if (rcqValue >= 0.85 || rcqValue >= 0.94) {
            rcqElement.value = "Alto Risco";
          }
        }
      }
      if (oldYears.value >= 20 && oldYears.value <= 29) {
        if (rcqValue < 0.83) {
          rcqElement.value = "Baixo Risco";
        }
        if (rcqValue >= 0.83 && rcqValue <= 0.88) {
          rcqElement.value = "Moderado";
        }
        if (rcqValue >= 0.89 && rcqValue <= 0.94) {
          rcqElement.value = "Alto";
        }
        if (rcqValue > 0.94) {
          rcqElement.value = "Alto Risco";
        }
      }
    }
  }
}
if (
  sexy.value == "Homem" ||
  sexy.value == "Masculino" ||
  sexy.value == "H" ||
  sexy.value == "masculino"
) {
}

cinturaC.addEventListener("change", rcq);
weight.addEventListener("change", imc);
subescapulaD.addEventListener("change", percentGordura);

const btnAdd = document
  .querySelector("#btnAdd")
  .addEventListener("click", function () {
    const nameClient = document.getElementById("name").value;

    const work = document.getElementById("work").value;

    const obs = document.getElementById("textObs").value;
    const panturilhaC = document.getElementById("panturrilha").value;
    const coxaC = document.getElementById("coxa").value;

    const abdomenC = document.getElementById("abdomen").value;
    const peitoralC = document.getElementById("peitoral").value;
    const bracoC = document.getElementById("braco").value;
    const pulsoC = document.getElementById("pulso").value;
    id = nameClient;
    console.log("id é " + id);
    newClient.push(id);
    newClient.push("\n" + "Nome: " + nameClient + "\n");
    newClient.push("Idade: " + oldYears.value + "\n");
    newClient.push("Sexo: " + sexy.value + "\n");
    newClient.push("Profissão: " + work + "\n");
    newClient.push("Peso: " + weight.value + "\n");
    newClient.push("Altura: " + height.value + "\n");
    newClient.push("Observações: " + obs + "\n");
    newClient.push("Panturilha Circunferência: " + panturilhaC + "\n");
    newClient.push("Coxa Circunferência: " + coxaC + "\n");
    newClient.push("Quadril Circunferência: " + quadrilC.value + "\n");
    newClient.push("Abdomen Circunferência: " + abdomenC + "\n");
    newClient.push("Cintura Circunferência: " + cinturaC.value + "\n");
    newClient.push("Peitoral Circunferência: " + peitoralC + "\n");
    newClient.push("Braco Circunferência: " + bracoC + "\n");
    newClient.push("Pulso Circunferência: " + pulsoC + "\n");
    newClient.push("Coxa Dobra: " + coxaD.value + "\n");
    newClient.push("Suprailíaca Dobra: " + suprailiacaD.value + "\n");
    newClient.push("Abdômen Dobra: " + abdomenD.value + "\n");
    newClient.push("Axila Dobra: " + axilaD.value + "\n");
    newClient.push("Bíceps Dobra: " + bicepsD.value + "\n");
    newClient.push("Tríceps Dobra: " + tricepsD.value + "\n");
    newClient.push("Sub-escapula Dobra: " + subescapulaD.value + "\n");
    newClient.push("IMC: " + imcElement.value + "\n");
    newClient.push("RCQ: " + rcqElement.value + "\n");
    newClient.push("%Goruda: " + percenteGoduraD.value);
    console.log(newClient);

    localStorage.setItem(id, newClient);
  });

const btnRead = document
  .getElementById("btnRead")
  .addEventListener("click", function () {
    const t = localStorage.getItem(id);
    alert("O texto salvo no local storage é: " + t);
  });
