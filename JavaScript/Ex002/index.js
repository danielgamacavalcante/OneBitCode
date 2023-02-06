let bollean = true;

let contador = 0;
let arrayPessoas = [];
let contato = {};

function addContact() {
  if (bollean) {
    const listContact = document.getElementById("listContact");
    const ul = document.createElement("ul");
    ul.id = "ul";
    const nameLi = document.createElement("li");
    nameLi.className = "li";
    const nameLabel = document.createElement("label");
    nameLabel.className = "classLabel";
    nameLi.innerHTML = "<label for='nameContact'>Nome: </label>";
    const inputTextName = document.createElement("input");
    inputTextName.className = "inputClass";
    inputTextName.type = "text";
    inputTextName.name = "nameContact";
    inputTextName.id = "nameContact";

    nameLi.appendChild(inputTextName);
    ul.appendChild(nameLi);

    const phoneLi = document.createElement("li");
    phoneLi.className = "li";
    phoneLi.innerText = "Telefone:  ";
    const phoneInput = document.createElement("input");
    phoneInput.className = "inputClass";
    phoneInput.type = "tel";
    phoneInput.min = "11";
    phoneInput.max = "11";
    phoneInput.placeholder = "Ex:85 9 97971010";
    phoneInput.id = "phoneContact";

    phoneLi.appendChild(phoneInput);
    ul.appendChild(phoneLi);

    const andressLi = document.createElement("li");
    andressLi.className = "li";
    andressLi.innerText = "Endereço:";
    const andressInput = document.createElement("input");
    andressInput.type = "text";
    andressInput.className = "inputClass";
    andressInput.id = "andressContact";

    andressLi.appendChild(andressInput);
    ul.appendChild(andressLi);

    // const btnSubmit = document.createElement("button");
    // btnSubmit.id = "btnSubmit";
    // btnSubmit.type = "button";
    // btnSubmit.innerText = "Adicionar";
    // btnSubmit.onclik = "adicionar()";

    const btnLi = document.createElement("li");
    btnLi.className = "li";
    btnLi.innerHTML =
      "<button type = 'button' onclick = 'adicionar()'>Adicionar</button>";

    // btnLi.appendChild(btnSubmit);
    ul.appendChild(btnLi);
    listContact.appendChild(ul);
    bollean = false;
  }
}

function adicionar() {
  console.log(bollean);
  if (bollean == false) {
    console.log("Entrou no Adicionar");
    let nameContact = document.querySelector("#nameContact");
    contato.name = nameContact.value;

    let phoneContact = document.querySelector("#phoneContact");
    contato.phone = phoneContact.value;

    let andressContact = document.querySelector("#andressContact");
    contato.andress = andressContact.value;
    arrayPessoas.push(contato);

    const hr = document.createElement("hr");
    const p = document.createElement("p");
    let c = arrayPessoas[contador];
    p.innerHTML = `Nome: ${c.name} Telefone: ${c.phone}  Endereço: ${c.andress}
    <button onclick ='remove(${contador})'>Remover</button>`;

    listContact.appendChild(hr);
    listContact.appendChild(p);

    nameContact.value = "";
    phoneContact.value = "";
    andressContact.value = "";
    contador++;
  }
}

function remove(num) {
  console.log("Entrou Remove");
  console.log(num);

  arrayPessoas.splice(num, 1);
  console.log(arrayPessoas.length - 1);
}
