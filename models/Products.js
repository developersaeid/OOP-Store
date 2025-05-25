// Create Class for showing products
class Products {
  constructor(parent, products) {
    this.parent = parent;
    this.products = products;
  }
  showProducts() {
    this.products.forEach((product) => this.createCard(product));
  }
  createCard(data) {
    const cardEle = document.createElement("div");

    const imgEl = this.productImg(data);
    const infoEl = this.productInfo(data);

    cardEle.innerHTML = imgEl;
    cardEle.innerHTML += infoEl;

    this.parent.appendChild(cardEle);
  }

  productImg(data) {
    const { image, alt } = data;
    const imgJsx = `<img alt="${alt}" src="${image}"/>`;
    return imgJsx;
  }
  productInfo(data) {
    const { id, name, price } = data;
    const infoJsx = `
    <div>
        <h3>${name}</h3>
        <div>
            <span>${price}</span>
            <button data-id=${id}>+</button>
        </div>
    </div>
    `;
    return infoJsx;
  }
}

export default Products;
