import { getFavoriteProducts } from "./module/utilsProduct.js";
import { printProductsFavorites, addProductTofavorites } from "./module/utilsProductFavorites.js";

const favoritesProducts = getFavoriteProducts();

window.addProductTofavorites = addProductTofavorites;

printProductsFavorites(favoritesProducts, 'favorite-products');
