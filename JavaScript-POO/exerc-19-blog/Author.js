const Post = require("./Post");

class Author {
  constructor(name, ip) {
    this.name;
    this.ip;
    this.posts = [];
  }
  writePost(title, body) {
    const post = new Post(title, body, this);
    this.posts.push(post);
    return post;
  }
}

module.exports = Author;
