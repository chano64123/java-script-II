const favoritesProducts = JSON.parse(localStorage.getItem('favorites')) ?? [];
const cartProductsSelector = document.getElementById('cart-products');

const printCartProducts = (products) => {
  let templateProducts = '';
  if (products.length > 0) {
    //!generando los elementos del carrito
    for (let product of products) {
      const isFavorite = favoritesProducts.filter(producto => producto.id === product.id);
      templateProducts += getCartProductTemplate(product, isFavorite.length > 0);
    }
  } else {
    templateProducts = getMessageNoProducts();
  }
  cartProductsSelector.innerHTML = templateProducts;
}

const manageFavorite = (element) => {
  const clases = Array.from(element.classList);
  const seAgrega = clases.includes('fa-regular');
  const productId = Number(element.dataset.id);
  const product = favoritesProducts.find(product => product.id === productId);

  let favorites = JSON.parse(localStorage.getItem('favorites')) ?? [];
  if (seAgrega) {
    favorites.push(product)
  } else {
    favorites = favorites.filter(producto => producto.id !== productId);
  }
  localStorage.setItem('favorites', JSON.stringify(favorites));

  //#region Pintar o despintar estrella
  if (seAgrega) {
    element.classList.remove("fa-regular");
    element.classList.add("fa-solid");
  } else {
    element.classList.remove("fa-solid");
    element.classList.add("fa-regular");
  }
  //#endregion
}

const getMessageNoProducts = () => {
  return `
    <h1 class="no-products-message">No hay productos en la lista de favoritos.</h1>
  `;
}

const getCartProductTemplate = (product, isFavorite) => {
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
        <i class="${classFavorite} fa-star favorite" onclick="manageFavorite(this)" data-id="${product.id}"></i>
      </div>
    </div>
  `;
}

printCartProducts(favoritesProducts);
