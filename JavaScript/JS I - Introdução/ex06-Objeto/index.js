let name = "prop";
let object = {};
object.prop = "Olá, mundo";

console.log(object.prop);
console.log(object[name]);
console.log(object.prop === object[name]);
console.log(object.prop === object["pro" + "p"]);

let functionLog = "log";
console[functionLog]("Olá mundo!!");

const people = {};
people.name = "Daniel";
people.age = "31";

//ver o conteúdo completo de um objeto
console.log(people);

//ver as chaves de um objeto
console.log(Object.keys(people));
people.friends = ["Lucas", "Maria", "Jose"];
people.address = { street: "Logo Ali", number: 30, distric: "centro" };
console.log(people);
