const cartProductsString = localStorage.getItem('cart');
let cartProducts = JSON.parse(cartProductsString) ?? [];

const cartProductsSelector = document.getElementById('cart-products');
const totalPriceSelector = document.getElementById('total-price');

const favoritesProducts = JSON.parse(localStorage.getItem('favorites')) ?? [];

const setTotal = (products) => {
  let totalPrice = 0;
  products.forEach(product => (totalPrice += product.price * product.quantity));
  totalPriceSelector.textContent = totalPrice.toFixed(2);
}

const printCartProducts = (products) => {
  let templateProducts = '';
  if (products.length > 0) {
    //!generando los elementos del carrito
    for (let product of products) {
      const isFavorite = favoritesProducts.filter(producto => producto.id === product.id);
      templateProducts += getCartProductTemplate(product, isFavorite.length > 0);
    }
    //!obteniendo el total a pagar
    setTotal(products);
  } else {
    templateProducts = getMessageNoProducts();
  }
  cartProductsSelector.innerHTML = templateProducts;
}

const changeQuantity = (event) => {
  const newQuantity = Number(event.target.value);
  const idProduct = Number(event.target.id);
  const colorProduct = event.target.dataset.color;

  const product = cartProducts.find(product => product.id === idProduct && product.color === colorProduct);
  product.quantity = newQuantity;

  localStorage.setItem('cart', JSON.stringify(cartProducts));
  setTotal(cartProducts);
}

const getMessageNoProducts = () => {
  return `
    <h1 class="no-products-message">No hay productos en el carrito.</h1>
  `;
}

const manageFavorite = (element) => {
  const clases = Array.from(element.classList);
  const seAgrega = clases.includes('fa-regular');
  const productId = Number(element.dataset.id);
  const product = cartProducts.find(product => product.id === productId);

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

const getCartProductTemplate = (product, isFavorite) => {
  const classFavorite = isFavorite ? 'fa-solid' : 'fa-regular';
  return `
    <div class="cart-product">
      <img src="${product.image}" height="150" alt="" />
      <div class="cart-product-detail">
          <span class="cart-product-title">${product.title}</span>
          <span class="cart-product-color">${product.color}</span>
          <span class="cart-product-description">${product.description}</span>
          <input id="${product.id}" data-color="${product.color}" type="number" min="1" value="${product.quantity}" class="cart-product-quantity" onchange="changeQuantity(event)" />
      </div>
      <div class="price">S/${product.price.toFixed(2)}</div>
      <div class="cart-product-favorite">
        <i class="${classFavorite} fa-star favorite" onclick="manageFavorite(this)" data-id="${product.id}"></i>
      </div>
    </div>
  `;
}

printCartProducts(cartProducts);
