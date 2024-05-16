import { getProducts } from "./module/utilsProduct.js";
import { printProductsCards } from "./module/utilsProductCard.js";

const products = await getProducts();

printProductsCards(products, 'products')
