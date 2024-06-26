import { hasSession } from "./session.js";
import { getCartProducts, getFavoriteProducts, getIndexFromProductByIdAndColor, setCartProducts } from "./utilsProduct.js";
import { ICONS_SA, showAlert, showToast } from "./utilsSweetAlert.js";

const setTotalCart = (products, idSelectorTotal) => {
  const totalPrice = products.reduce((total, product) => total + product.price, 0);
  const totalPriceSelector = document.getElementById(idSelectorTotal);
  totalPriceSelector.textContent = totalPrice.toFixed(2);
}

const getMessageNoCartProducts = () => {
  return `
    <h1 class="no-products-message">No hay productos en el carrito.</h1>
  `;
}

const getCartProductTemplate = (product, isFavorite) => {
  const classFavorite = isFavorite ? 'fa-solid' : 'fa-regular';
  return `
    <div class="cart-product">
      <img src="${product.image}" height="150" alt="${product.title}" />
      <div class="cart-product-detail">
          <span class="cart-product-title">${product.title}</span>
          <span class="cart-product-color">${product.color}</span>
          <span class="cart-product-description">${product.description}</span>
          <input id="${product.id}" data-color="${product.color}" type="number" min="1" max="10" value="${product.quantity}" class="cart-product-quantity" onchange="changeProductQuantity(event)" />
      </div>
      <div class="price">S/${product.price.toFixed(2)}</div>
      <div class="cart-product-favorite">
        <i class="${classFavorite} fa-star favorite" onclick="addProductTofavorites(this)" data-id="${product.id}" data-color="${product.color}"></i>
      </div>
    </div>
  `;
}

const printProductsCart = (products, idCartProductsSelector) => {
  if (!hasSession()) {
    products = [];
    showAlert('Aviso!!!', 'Tienes que iniciar sesion para poder ver los productos del carrito.', ICONS_SA.WARNING);
  }

  const favoritesProducts = getFavoriteProducts();
  let templateProducts = '';

  if (products.length > 0) {
    for (let product of products) {
      const index = getIndexFromProductByIdAndColor(favoritesProducts, product.id, product.color);
      const isFavorite = index !== -1;
      templateProducts += getCartProductTemplate(product, isFavorite);
    }
    setTotalCart(products, 'total-price');
  } else {
    templateProducts = getMessageNoCartProducts();
  }

  const cartProductsSelector = document.getElementById(idCartProductsSelector);
  cartProductsSelector.innerHTML = templateProducts;
}

const changeProductQuantity = (event) => {
  const newQuantity = Number(event.target.value);
  const idProduct = Number(event.target.id);
  const colorProduct = event.target.dataset.color;
  const cartProducts = getCartProducts();

  const product = cartProducts.find(product => product.id === idProduct && product.color === colorProduct);
  product.quantity = newQuantity;

  setCartProducts(cartProducts)
  setTotalCart(cartProducts, 'total-price');
  showToast(`Nueva cantidad para <strong>${product.title}</strong>: ${newQuantity} unidad(es).`, ICONS_SA.INFO);
}

const finalizePurchase = () => {
  setCartProducts([]);
  printProductsCart([], 'cart-products');
  setTotalCart([], 'total-price');
  showAlert('Pedido exitoso!', 'Recibiras información sobre el estado en tu pedido por correo electronico', ICONS_SA.SUCCESS);
}

export { setTotalCart, getMessageNoCartProducts, getCartProductTemplate, printProductsCart, changeProductQuantity, finalizePurchase }
