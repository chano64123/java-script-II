import { printProductsCart, changeProductQuantity } from "./module/utilsProductCart.js";
import { addProductTofavorites } from "./module/utilsProductFavorites.js";
import { getCartProducts } from "./module/utilsProduct.js";

const cartProducts = getCartProducts();

try {
  window.changeProductQuantity = changeProductQuantity
  window.addProductTofavorites = addProductTofavorites
} catch (error) {
  console.warn(error);
}

printProductsCart(cartProducts, 'cart-products');
