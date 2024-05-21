import { getFavoriteProducts } from "./module/utilsProduct.js";
import { printProductsFavorites, addProductTofavorites } from "./module/utilsProductFavorites.js";

const favoritesProducts = getFavoriteProducts();

try {
  window.addProductTofavorites = addProductTofavorites;
} catch (error) {
  console.warn(error);
}

printProductsFavorites(favoritesProducts, 'favorite-products');
