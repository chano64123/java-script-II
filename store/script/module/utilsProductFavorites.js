import { getCartProducts, getProductByIdAndColor, getIndexFromProductByIdAndColor, removeProductByIdAndColor, getFavoriteProducts, setFavoriteProducts } from "./utilsProduct.js";

const manageFavoriteView = (element, addedToFavorites) => {
  if (addedToFavorites) {
    element.classList.remove("fa-regular");
    element.classList.add("fa-solid");
  } else {
    element.classList.remove("fa-solid");
    element.classList.add("fa-regular");
  }
}

const addProductTofavorites = (element) => {
  const cartProducts = getCartProducts();
  let favoriteProducts = getFavoriteProducts();

  const classes = Array.from(element.classList);
  const addedToFavorites = classes.includes('fa-regular');
  const productId = Number(element.dataset.id);
  const productColor = element.dataset.color;
  const product = getProductByIdAndColor(cartProducts, productId, productColor);

  if (addedToFavorites) {
    favoriteProducts.push(product)
  } else {
    favoriteProducts = removeProductByIdAndColor(favoriteProducts, productId, productColor);
  }
  setFavoriteProducts(favoriteProducts)
  manageFavoriteView(element, addedToFavorites);
}

const getMessageNoFavoriteProducts = () => {
  return `
    <h1 class="no-products-message">No hay productos en la lista de favoritos.</h1>
  `;
}

const getFavoriteProductTemplate = (product, isFavorite) => {
  const classFavorite = isFavorite ? 'fa-solid' : 'fa-regular';
  return `
    <div class="cart-product">
      <img src="${product.image}" height="150" alt="" />
      <div class="cart-product-detail">
          <span class="cart-product-title">${product.title}</span>
          <span class="cart-product-color">${product.color}</span>
          <span class="cart-product-description">${product.description}</span>
      </div>
      <div class="price">S/${product.price.toFixed(2)}</div>
      <div class="cart-product-favorite">
        <i class="${classFavorite} fa-star favorite" onclick="addProductTofavorites(this)" data-id="${product.id}" data-color="${product.color}"></i>
        </div>
    </div>
  `;
}

const printProductsFavorites = (products, idFavoriteProductsSelector) => {
  const favoritesProducts = getFavoriteProducts();
  let templateProducts = '';

  if (products.length > 0) {
    for (let product of products) {
      const index = getIndexFromProductByIdAndColor(favoritesProducts, product.id, product.color);
      const isFavorite = index !== -1;
      templateProducts += getFavoriteProductTemplate(product, isFavorite);
    }
  } else {
    templateProducts = getMessageNoFavoriteProducts();
  }

  const favoriteProductsSelector = document.getElementById(idFavoriteProductsSelector);
  //const favoriteProductsSelector = document.getElementById('favorite-products');
  favoriteProductsSelector.innerHTML = templateProducts;
}

export { addProductTofavorites, getMessageNoFavoriteProducts, printProductsFavorites }
