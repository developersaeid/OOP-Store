class Cart {
  constructor(parent, price) {
    this.parent = parent;
    this.price = price;
    this.products = [];
    this.toShow = [];
    this.parent.addEventListener("click", this);
  }
  showProducts() {
    this.toShow = [...new Set(this.products)]; // remove duplicates
    this.parent.innerHTML = ""; // clear parent element
    this.toShow.forEach((product) => {
      const quantity = this.products.filter((p) => p.id === product.id).length;
      this.createCard(product, quantity);
    });
  }

  createCard(data, quantity) {
    const cardEl = document.createElement("div");

    const imgEl = this.productImg(data);
    const infoEl = this.productInfo(data);
    const controlEl = this.productControl(data, quantity);

    cardEl.innerHTML = imgEl;
    cardEl.innerHTML += infoEl;
    cardEl.innerHTML += controlEl;

    this.parent.appendChild(cardEl);
  }
  productImg(data) {
    const { image, alt } = data;
    const img = `<img alt="${alt}" src="${image}"/>`;
    return img;
  }
  productInfo(data) {
    const { name, price } = data;
    const info = `
        <div id="cart-info">
            <h4>${name}</h4>
            <p>$ ${price}</p>
        </div>
    `;
    return info;
  }
  productControl(date, quantity) {
    const { id } = date;
    const control = `
    <div id="cart-control">
        <div>
            <button data-id=${id}>-</button>
            <span>${quantity}</span>
            <button data-id=${id}>+</button>
        </div>
        <button data-id=${id}>remove</button>
    </div>
    `;
    return control;
  }
  handleEvent(event) {
    const tagName = event.target.tagName;
    const id = event.target.dataset.id;
    const type = event.target.innerText;

    if (tagName !== "BUTTON") return;
    switch (type) {
      case "+":
        this.increase(id);
        break;
      case "-":
        this.decrease(id);
        break;
      case "remove":
        this.remove(id);
        break;
    }
  }
  increase(id) {
    const product = this.products.find((p) => p.id === +id);
    this.products.push(product);
    this.showProducts();
  }

  decrease(id) {
    const index = this.products.findIndex((p) => (p.id === id));
    this.products.splice(index, 1);
    this.showProducts();
  }

  remove(id) {
    const newProducts = this.products.filter((p) => p.id !== +id);
    this.products = newProducts
    this.showProducts();
  }
}

export default Cart;
