import { fetchData } from "./utils/httpReq.js";

// taking data from fetch httpReq
async function render() {
  const productsData = await fetchData();
  console.log(productsData);
}
document.addEventListener("DOMContentLoaded", render);

// Create Class for products
