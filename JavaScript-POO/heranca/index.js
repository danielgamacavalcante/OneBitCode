class Adress {
  constructor(street, number) {
    this.street = street;
    this.number = number;
  }

  getAdress() {
    return console.log("Rua: " + this.street + " Número: " + this.number);
  }
  getStreet() {
    return this.street;
  }

  getNumber() {
    return this.number;
  }
}

class Property {
  constructor(area, price, street, number) {
    this.adress = new Adress(street, number);
    this.area = area;
    this.price = price;
  }

  getPricePerSquareMeter() {
    return this.price / this.area;
  }
}

class House extends Property {}

class Apartment extends Property {
  constructor(area, price, street, number, numbApartment) {
    super(area, price, street, number);
    this.numbApartment = numbApartment;
  }
  getFloor() {
    return this.numbApartment.slice(0, -2);
  }
}

const newAdress = new Adress("Clovis de Olivrira", "123");
const newProperty = new Property(
  "500",
  "300000",
  newAdress.getStreet(),
  newAdress.getNumber()
);
const newHouse = new House("600", "500000", "João Vilar", "164");
const newApartment = new Apartment(
  "130",
  "400000",
  "Alvaro Antonio",
  "153",
  "1604"
);

console.log(newProperty);
console.log(newHouse);
console.log(newApartment);
console.log("O andar é :" + newApartment.getFloor());
