class Address {
  constructor(street, number, neighborhood, city) {
    this.street = street;
    this.number = number;
    this.neighborhood = neighborhood;
    this.city = city;
  }

  fullAdress() {
    return console.log(
      `Rua: ${this.street}, ${this.number}, ${this.neighborhood}, ${this.city} `
    );
  }
}

module.exports = Address;
