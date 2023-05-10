const Author = require("./Author");

const john = new Author("John Doe", "168.192.44");

const post = john.writePost("Título do Post", "Lorem ipsum dolor sic....");

post.addComment("Issac", "Muito bom!");
post.addComment("Lucas", "Gostei bastante.");

console.log(post);
