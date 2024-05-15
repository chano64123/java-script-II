import { printProductsCart, changeProductQuantity } from "./module/utilsProductCart.js";
import { addProductTofavorites } from "./module/utilsProductFavorites.js";
import { getCartProducts } from "./module/utilsProduct.js";

const cartProducts = getCartProducts();

window.changeProductQuantity = changeProductQuantity
window.addProductTofavorites = addProductTofavorites

printProductsCart(cartProducts, 'cart-products');
