class Display {
  constructor(parent, products) {
    this.parent = parent;
    this.products = products;
    this.parent.addEventListener("click", this);
  }
  showProducts() {
    this.toShow = [...new Set(this.products)]; // remove duplicates
    this.parent.innerHTML = ""; // clear parent element
    this.toShow.forEach((product) => {
      const quantity = this.products.filter((p) => p.id === product.id).length;
      this.createCard(product, quantity);
    });
    this.calculateTotalPrice();
  }
  createCard(data, quantity) {
    const cardEl = document.createElement("div");

    const imgEl = this.productImg(data);
    const infoEl = this.productInfo(data);

    cardEl.innerHTML = imgEl;
    cardEl.innerHTML += infoEl;

    if (this.constructor.name === "Cart") {
      const controlEl = this.productControl(data, quantity);
      cardEl.innerHTML += controlEl;
    }

    this.parent.appendChild(cardEl);
  }
  productImg(data) {
    const { image, alt } = data;
    const img = `<img alt="${alt}" src="${image}"/>`;
    return img;
  }
}

export default Display;
