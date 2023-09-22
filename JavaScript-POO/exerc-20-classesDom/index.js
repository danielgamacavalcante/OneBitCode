class Component {
  #elementDom = null;
  constructor(tag, parent, options) {
    this.tag = tag;
    this.parent = parent;
    this.options = options;
    this.build();
  }
  build() {
    this.#elementDom = document.createElement(tag);
    Object.assign(this.#elementDom, this.options);
    return this;
  }
  getElement() {
    return this.#elementDom;
  }
}
