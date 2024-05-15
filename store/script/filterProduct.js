import { products } from "./module/products.js";
import { printProductsCards } from "./module/utilsProductCard.js";

const searchSelector = document.getElementById('inputSearch');

searchSelector.addEventListener("keyup", event => captureText(event))

function captureText(event) {
  let search = event.target.value;
  const productsFiltered = products.filter(product => product.title.toLowerCase().includes(search.toLowerCase()));
  printProductsCards(productsFiltered, 'products')
}
