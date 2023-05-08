//objeto
// const book = {
//   title: "Eragon",
//   pages: 456,
//   published: true,
//   editora: "Abril",
//   inStock: 20,
//   tags: ["fantasy", "adventure", "medieval"],
//   author: {
//     name: "Lucas",
//   },
//   addOnStock(quantity) {
//     this.inStock += quantity;
//   },
// };

// console.log(book);

// book.addOnStock(30);

// console.log(book.inStock);

// book.save = () => console.log("Foi salvo");

// console.log(book.save());

//Função Construtora
function Book(title, pages, author, tags) {
  this.title = title;
  this.pages = pages;
  this.author = author;
  this.published = false;
  this.inStock = 0;
  this.addOnStock = (quantity) => (this.inStock += quantity);
}

const author = { name: "Lucas Pinheiro" };
const tags = ["Fantasy", "Medieval"];
//criando um objeto novo
const aragon = new Book("Aragon", "468", author, tags);

console.log(aragon);
aragon.published = true;
aragon.addOnStock(40);
console.log(aragon);
