import { setCartProducts } from "./module/utilsProduct.js";
import { printProductsCart, setTotalCart } from "./module/utilsProductCart.js";

const buySelector = document.getElementById('finalizar-compra')
buySelector.addEventListener('click', function () {
  setCartProducts([]);
  printProductsCart([], 'cart-products');
  setTotalCart([], 'total-price')
})