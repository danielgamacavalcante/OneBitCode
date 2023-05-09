const Address = require("./Address");
const Person = require("./Person");

const addr = new Address("13 de maio", 180, "Bairro de Fátima", "Fortaleza");
const jose = new Person("Jose de Aquino", addr);

console.log(jose.address.fullAdress());
