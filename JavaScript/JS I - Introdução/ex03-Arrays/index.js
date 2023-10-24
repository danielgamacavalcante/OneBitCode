// const shoppingList = ["Sugar", false];
// console.log(shoppingList);
// shoppingList[0] = "Rice";

// shoppingList[1] = "Bean";
// shoppingList[2] = 7;
// shoppingList[5] = "Potato";
// console.log(shoppingList);

// console.log(shoppingList[4]);
const arr = [
  "Frodo",
  "Sam",
  "Merry",
  "Pippin",
  "Gandalf",
  "Aragorn",
  "Legolas",
  "Gimli",
];
console.log(arr);
//Adicionar elementos
//push no final
let sizeArr = arr.push("Golum");
console.log(arr);
console.log(sizeArr);

//Unshift no começo
sizeArr = arr.unshift("Boromir");
console.log(arr);
console.log(sizeArr);
// ==================================================
//Remover Elementos
//pop do fim
let lastElement = arr.pop();
console.log(arr);
console.log(lastElement);

//Shift no começo
lastElement = arr.shift();
console.log(arr);
console.log(lastElement);
// ======================================================
//Pesquisar por um Elemento
//includes
const include = arr.includes("Gandalf");
console.log(include + " Gandalf");
//indexOf
const indice = arr.indexOf("Gandalf");
console.log("Índice = " + indice);
// ===========================================================
//Cortar e Concatenar
//slide
const hobbits = arr.slice(0, 4);
const another = arr.slice(-4);
console.log(`Novo Array de Hobbits: ${hobbits}`);
console.log(`Um outro Array: ${another}`);
//concat
const society = hobbits.concat(another, "Boromir");
console.log(society);
//Substituição dos Elementos
//splice
const removed = society.splice(indice, 1, "Gandalf, o cinzento", 1, 2, false);
//devolve uma lista de elementos removidos
console.log(removed);
console.log(society);
for (let indice = 0; indice < society.length; indice++) {
  const element = society[indice];
  console.log(element + " se encontra na posição " + indice);
}
