const User = require("./User");
const Product = require("./Product");

const tv = new Product("Panasonic", "TV LCD 32", 1500);
const watch = new Product(
  "Relógio de Bolso",
  "Relógigo estilo para bolso",
  1000
);
const jose = new User("Jose Sobral", 1234, "jose@email.com");

jose.shoppingCart.push(tv);

watch.calculateDiscount(10);
jose.shoppingCart.push(watch);
console.log(jose);
