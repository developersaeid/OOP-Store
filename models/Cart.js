class Cart {
  constructor(parent, price) {
    this.parent = parent;
    this.price = price;
    this.products = [];
    this.toShow = [];
  }
  showProducts() {
    this.toShow = [...new Set(this.products)]; // remove duplicates
    this.parent.innerHTML = ""; // clear parent element
    this.products.forEach((product) => {
      const quantity = this.products.filter((p) => p.id === product.id).length;
      this.createCard(product, quantity);
    });
  }

  createCard(data,quantity) {
    
  }
}

export default Cart;
