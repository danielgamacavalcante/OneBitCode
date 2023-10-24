document.querySelector("#formDamage").addEventListener("submit", function (ev) {
  ev.preventDefault();

  const nameCharacter = document.querySelector("#nameCharacter").value;
  const nameCharacter2 = document.querySelector("#nameCharacter2").value;

  const nameAtk = document.querySelector("#nameAtk").value;
  const nameAtk2 = document.querySelector("#nameAtk2").value;

  // if (validShield2.value == "Válido") {
  //   let lifeCharacter2 = document.querySelector("#lifeCharacter2");
  //   console.log("Entrou");
  //   console.log(shieldDef2.value);

  //   lifeCharacter2.value =
  //     parseFloat(shieldDef2.value) + parseFloat(lifeCharacter2.value);
  //   lifeCharacter2.value =
  //     parseFloat(lifeCharacter2.value) - parseFloat(atakCharacter.value);
  // } else {
  //   let lifeCharacter2 = document.querySelector("#lifeCharacter2");

  //   lifeCharacter2.value =
  //     parseFloat(lifeCharacter2.value) - parseFloat(atakCharacter.value);
  // }

  let numberRandom = Math.floor(Math.random() * 2);
  alert(numberRandom);

  let validShield = document.querySelector("#validShield");
  let validShield2 = document.querySelector("#validShield2");
  let lifeCharacter = document.querySelector("#lifeCharacter");
  let lifeCharacter2 = document.querySelector("#lifeCharacter2");
  let shieldDef2 = document.querySelector("#shieldDef2");
  let shieldDef = document.querySelector("#shieldDef");
  const atakCharacter = document.querySelector("#atakCharacter");
  const atakCharacter2 = document.querySelector("#atakCharacter2");
  console.log("Segundo personagem vida: " + parseInt(lifeCharacter2.value));
  console.log("Primeiro personagem vida: " + lifeCharacter.value);
  console.log("Valido shield 1 " + validShield.value);
  console.log("Valido shield 2 " + validShield2.value);
  if (numberRandom === 0) {
    switch (numberRandom === 0) {
      case validShield2.value == "Válido":
        if (lifeCharacter2.value <= 0) {
          alert(`${nameCharacter2} morreu ${nameCharacter} acabou vencendo!`);
          break;
        } else {
          lifeCharacter2.value =
            parseFloat(shieldDef2.value) + parseFloat(lifeCharacter2.value);
          lifeCharacter2.value =
            parseFloat(lifeCharacter2.value) - parseFloat(atakCharacter.value);
          break;
        }
      case validShield2.value == "Não Válido":
        if (lifeCharacter2.value <= 0) {
          alert(`${nameCharacter2} morreu ${nameCharacter} acabou vencendo!`);
          break;
        } else {
          lifeCharacter2.value =
            parseFloat(lifeCharacter2.value) - parseFloat(atakCharacter.value);
          break;
        }
      default:
        console.log("Entrou: Default 0");
        break;
    }
  } else {
    switch (numberRandom === 1) {
      case validShield.value == "Válido":
        if (parseInt(lifeCharacter.value) <= 0) {
          alert(`${nameCharacter} morreu ${nameCharacter2} acabou vencendo!`);
          break;
        } else {
          lifeCharacter.value =
            parseFloat(shieldDef.value) + parseFloat(lifeCharacter.value);
          lifeCharacter.value =
            parseFloat(lifeCharacter.value) - parseFloat(atakCharacter2.value);
          break;
        }

      case validShield.value == "Não Válido":
        if (parseInt(lifeCharacter.value) <= 0) {
          alert(`${nameCharacter} morreu ${nameCharacter2} acabou vencendo!`);
          break;
        } else {
          lifeCharacter.value =
            parseFloat(lifeCharacter.value) - parseFloat(atakCharacter2.value);
          break;
        }
      default:
        console.log("Entrou: Default 1");
        break;
    }
  }
});

if (validShield2)
  document
    .querySelector("#btnShieldExist")
    .addEventListener("click", function (ev) {
      ev.preventDefault();
      let validShield = document.querySelector("#validShield");
      let number = Math.floor(Math.random() * 10);

      if (validShield.value == "") {
        if (number > 5) {
          validShield.value = "Válido";
        } else {
          validShield.value = "Não Válido";
        }
      } else {
        stop;
      }
    });

document
  .querySelector("#shieldDefCreate")
  .addEventListener("click", function (ev) {
    ev.preventDefault();
    let shieldDef = document.querySelector("#shieldDef");

    if (validShield.value !== "") {
      if (validShield.value == "Válido") {
        if (shieldDef.value == "") {
          shieldDef.value = Math.floor(Math.random() * 9 + 1);
        }
      } else {
        stop;
      }
    }
  });

document
  .querySelector("#btnShieldExist2")
  .addEventListener("click", function (ev) {
    ev.preventDefault();
    let validShield2 = document.querySelector("#validShield2");
    let number = Math.floor(Math.random() * 10);

    if (validShield2.value == "") {
      if (number > 5) {
        validShield2.value = "Válido";
      } else {
        validShield2.value = "Não Válido";
      }
    } else {
      stop;
    }
  });

document
  .querySelector("#shieldDefCreate2")
  .addEventListener("click", function (ev) {
    ev.preventDefault();
    let shieldDef2 = document.querySelector("#shieldDef2");

    if (validShield2.value !== "") {
      if (validShield2.value == "Válido") {
        if (shieldDef2.value == "") {
          shieldDef2.value = Math.floor(Math.random() * 9 + 1);
        }
      } else {
        stop;
      }
    }
  });
