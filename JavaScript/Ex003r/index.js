let player = {};
var arrayPlayer = [];
let contador = 0;

function addPlayer() {
  const position = document.querySelector("#position");
  const name = document.getElementById("name");
  const number = document.querySelector("#number");

  player.position = position.value;
  player.name = name.value;
  player.number = number.value;
  console.log(
    "Dados info:" + player.position + " " + player.name + " " + player.number
  );
  const confirmation = confirm(
    "Escalar: " +
      name.value +
      "(" +
      number.value +
      ")" +
      " como " +
      position.value +
      " ?"
  );
  if (confirmation) {
    arrayPlayer.push(player);

    const teamList = document.querySelector("#teamList");
    const teamLi = document.createElement("li");
    teamLi.id = "player-" + number.value;
    const textPlayer = document.createElement("p");
    const playerFutebol = arrayPlayer[contador];
    textPlayer.innerText = `${playerFutebol.position}: ${playerFutebol.name} (${playerFutebol.number})`;

    teamLi.appendChild(textPlayer);
    teamList.appendChild(teamLi);

    position.value = "";
    name.value = "";
    number.value = "";
    contador++;
    console.log("contador: " + contador);
  }
}

function removePlayer() {
  const numberRemove = document.querySelector("#numberToRemove").value;
  const playerToRemove = document.getElementById("player-" + numberRemove);
  if (numberRemove.value != "") {
    const confirmation = confirm(
      "Remover o jogador" + playerToRemove.innerText + "?"
    );
    if (confirmation) {
      console.log("Entrou no confirme");
      for (let cont = 0; cont <= arrayPlayer.length - 1; cont++) {
        console.log(arrayPlayer[cont]);
        const playerFutebol = arrayPlayer[cont];
        // console.log("Pegou nome do jogador: " + playerFutebol.name);
        // console.log("Pegou objeto e retornou:" + playerFutebol.number);
        // console.log("Número informado para remoção: " + numberRemove);
        if (playerFutebol.number == numberRemove) {
          arrayPlayer.splice(cont, 1);
          // document.getElementById("teamList").removeChild(playerToRemove);
          playerToRemove.remove();
          document.getElementById("numberToRemove").value = "";
        }
      }
    }
  } else {
    alert("Informe um número para ser removido");
  }
}
