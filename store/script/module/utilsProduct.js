import { KEY_LS_CART, KEY_LS_FAVORITES } from "./keysLocalStorage.js"
import { products } from "./products.js"

const getProducts = () => {
  return products;
}

const getProductById = (products, id) => {
  return products.find(product => product.id === Number(id));
}

const getProductByIdAndColor = (products, id, color) => {
  return products.find(product => product.id === Number(id) && product.color === color);
}

const getIndexFromProductByIdAndColor = (products, id, color) => {
  return products.findIndex(product => product.id === id && product.color === color);
}

const getFirstNElements = (products, quantity) => {
  return products.slice(0, quantity);
}

const removeProductByIdAndColor = (products, id, color) => {
  return products.filter(product => product.id !== id || product.color !== color);
}

const getCartProducts = () => {
  return JSON.parse(localStorage.getItem(KEY_LS_CART)) ?? [];
}

const setCartProducts = (cartProducts) => {
  localStorage.setItem(KEY_LS_CART, JSON.stringify(cartProducts));
}

const getFavoriteProducts = () => {
  return JSON.parse(localStorage.getItem(KEY_LS_FAVORITES)) ?? [];
}

const setFavoriteProducts = (favoriteProducts) => {
  localStorage.setItem(KEY_LS_FAVORITES, JSON.stringify(favoriteProducts));
}

export { getProducts, getProductById, getProductByIdAndColor, getIndexFromProductByIdAndColor, getFirstNElements, removeProductByIdAndColor, getCartProducts, setCartProducts, getFavoriteProducts, setFavoriteProducts }
