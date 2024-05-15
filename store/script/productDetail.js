import { products } from "./module/products.js"
import { getProductById } from "./module/utilsProduct.js";
import { changeMini, changeSubtotal, saveProduct, getProductImageTemplate, getProductDescriptionTemplate, getProductCheckoutTemplate } from "./module/utilsProductDetail.js";
import { printProductsCards } from "./module/utilsProductCard.js";

const productImageSection = document.getElementById('product-images')
const productDescriptionSection = document.getElementById('product-description')
const productCheckoutSection = document.getElementById('product-checkout')

const query = location.search;
const params = new URLSearchParams(query);
const id = params.get('id');

const printDetails = (productId) => {
  const product = getProductById(products, productId);
  productImageSection.innerHTML = getProductImageTemplate(product);
  productDescriptionSection.innerHTML = getProductDescriptionTemplate(product);
  productCheckoutSection.innerHTML = getProductCheckoutTemplate(product);
}

window.changeMini = changeMini;
window.changeSubtotal = changeSubtotal;
window.saveProduct = saveProduct;

printDetails(id)
printProductsCards(products, 'offer-products', 3)
