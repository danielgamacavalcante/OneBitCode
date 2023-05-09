class User {
  constructor(fullname, password, email) {
    this.fullname = fullname;
    this.password = password;
    this.email = email;
    this.shoppingCart = [];
  }

  login(email, password) {
    if (this.email == email && this.password == password) {
      console.log(`Login ${email} is successful`);
    } else {
      console.log("Something went wrong - check name or password");
    }
  }
}

module.exports = User;
