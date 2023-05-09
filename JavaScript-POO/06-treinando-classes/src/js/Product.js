class Product {
  constructor(name, description, priceOriginal) {
    this.name = name;
    this.description = description;
    this.priceOriginal = priceOriginal;
    this.inStock = 0;
    this.discontPrice = priceOriginal;
    this.discontGiven = 0;
  }

  addToStock(quantity) {
    this.inStock += quantity;
  }

  calculateDiscount(discount) {
    this.discontGiven = discount;
    return (this.discontPrice =
      this.priceOriginal * ((100 - this.discontGiven) / 100));
  }
}
module.exports = Product;
