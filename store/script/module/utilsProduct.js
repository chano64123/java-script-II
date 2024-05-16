import { KEY_LS_CART, KEY_LS_FAVORITES } from "./keysLocalStorage.js"
import { getProductsAsync } from "../../service/productService.js";

const orderAlphabetically = (a, b) => {
  const titleA = a.title.toUpperCase();
  const titleB = b.title.toUpperCase();
  return titleA === titleB ? 0 : titleA > titleB ? 1 : -1;
}

const getProducts = async () => {
  const productos = await getProductsAsync();
  return productos.sort((a, b) => orderAlphabetically(a, b));
  //return products.sort((a, b) => orderAlphabetically(a, b));
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
  let cartProducts = JSON.parse(localStorage.getItem(KEY_LS_CART)) ?? [];
  return cartProducts.sort((a, b) => orderAlphabetically(a, b));
}

const setCartProducts = (cartProducts) => {
  localStorage.setItem(KEY_LS_CART, JSON.stringify(cartProducts));
}

const getFavoriteProducts = () => {
  const favoriteProducts = JSON.parse(localStorage.getItem(KEY_LS_FAVORITES)) ?? [];
  return favoriteProducts.sort((a, b) => orderAlphabetically(a, b));
}

const setFavoriteProducts = (favoriteProducts) => {
  localStorage.setItem(KEY_LS_FAVORITES, JSON.stringify(favoriteProducts));
}

export { getProducts, getProductById, getProductByIdAndColor, getIndexFromProductByIdAndColor, getFirstNElements, removeProductByIdAndColor, getCartProducts, setCartProducts, getFavoriteProducts, setFavoriteProducts }
