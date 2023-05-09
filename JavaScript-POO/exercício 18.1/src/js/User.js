export class User {
  constructor(fullname, password, email) {
    this.fullname = fullname;
    this.password = password;
    this.email = email;
    this.buy = false;
  }

  login(email, password) {
    if (this.email == email && this.password == password) {
      console.log(`Login ${email} is successful`);
      alert(`Login ${email} is successful`);
    } else {
      console.log("Something went wrong - check name or password");
      alert("Something went wrong - check name or password");
    }
  }

  buy(Product, quantityProduct) {
    this.quantityProduct = quantityProduct;
    const product = Product;
  }
}

// function newUser(fullname, password, email) {
//   this.emailLogin = new User(fullname, password, email);
//   alert("Novo usuário criado");
// }
