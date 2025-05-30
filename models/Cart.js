import Display from "./Display.js";

class Cart extends Display {
  constructor(parent, price) {
    super(parent);
    this.price = price;
    this.products = [];
    this.toShow = [];
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
    const index = this.products.findIndex((p) => p.id === id);
    this.products.splice(index, 1);
    this.showProducts();
  }

  remove(id) {
    const newProducts = this.products.filter((p) => p.id !== +id);
    this.products = newProducts;
    this.showProducts();
  }

  calculateTotalPrice() {
    const total = this.products.reduce((acc, cur) => (acc += cur.price), 0);
    this.price.innerText = "$" + total;
  }
}

export default Cart;
