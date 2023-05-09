class Product {
  constructor(name, description, price) {
    this.name = name;
    this.description = description;
    this.price = price;
    this.inStock = 0;
  }

  addToStock(quantity) {
    this.inStock += quantity;
  }

  calculateDiscount(number) {
    const disconut = (this.price * number) / 100;
    const valuerDisconut = this.price - disconut;
    console.log("Você pagou " + valuerDisconut + "!");
  }
}
