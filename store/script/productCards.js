import { getProducts } from "./module/utilsProduct.js";
import { printProductsCards } from "./module/utilsProductCard.js";

const products = getProducts();

printProductsCards(products, 'products')
