import { hasSession } from "./session.js";
import { getProductById, getIndexFromProductByIdAndColor, getCartProducts, setCartProducts, getProducts } from "./utilsProduct.js";
import { ICONS_SA, showAlert, showToast } from "./utilsSweetAlert.js";

const products = await getProducts();

const changeMini = (event, idImageSelector) => {
  const route = event.target.src;
  const mainImage = document.getElementById(idImageSelector);
  mainImage.src = route;
}

const changeSubtotal = (event, priceIdSelector) => {
  const productId = event.target.dataset.id;
  const product = getProductById(products, productId);
  const quantityProducts = event.target.value;
  const productPrice = product.price;
  const subtotal = quantityProducts * productPrice;
  const priceSelector = document.getElementById(priceIdSelector);
  priceSelector.innerHTML = subtotal.toFixed(2);
}

const saveProduct = (event) => {
  if (!hasSession()) {
    showAlert('Aviso!!!', 'Tienes que iniciar sesion para poder agregar productos al carrito.', ICONS_SA.WARNING);
    return;
  }

  const productId = event.target.dataset.id;
  const product = getProductById(products, productId);
  const quantity = Number(document.querySelector('#quantity').value);
  const buy = {
    id: product.id,
    title: product.title,
    price: product.price,
    description: product.description,
    image: product.images[0],
    color: document.querySelector('#color').value,
    quantity
  }

  let cartProducts = getCartProducts();

  const productIndex = getIndexFromProductByIdAndColor(cartProducts, buy.id, buy.color);

  if (productIndex !== -1) {
    showToast('El producto ya existe en el carrito, se agrego la cantidad ingresada!', ICONS_SA.SUCCESS)
    cartProducts[productIndex].quantity += buy.quantity;
  } else {
    showToast('Producto agregado correctamente al carrito!', ICONS_SA.SUCCESS)
    cartProducts.push(buy);
  }

  setCartProducts(cartProducts)
}

const getProductImageTemplate = (product) => {
  let images = product.images.map((x, index) => `<div class="thumbnail-container"><img src="${x}" alt="miniatura ${index + 1}" onclick="changeMini(event, 'main-image')"/></div>`);
  return `
    ${images.join('')}
    <img id="main-image" class="main-image" src="${product.images[0]}" alt="" />
  `;
}

const getProductDescriptionTemplate = (product) => {
  let colors = product.colors.map(color => `<option value=${color}>${color}</option>`);
  return `
    <h1 class="title">${product.title}</h1>
    <form class="selector">
      <fieldset>
        <label class="label" for="color">Color</label>
        <select id="color">
          ${colors.join('')}
        </select>
      </fieldset>
    </form>
    <p class="description">${product.description}</p>
  `;
}

const getProductCheckoutTemplate = (product) => {
  return `
    <div class="checkout-container">
      <span class="checkout-total-label">Total:</span>
      <h2 class="checkout-total-price">S/<span id="checkout-total-price">${product.price.toFixed(2)}</span]></h2>
      <p class="checkout-description">Incluye impuestos, pero si quieres los evadimos por ti.</p>
      <ul class="checkout-policy-list">
        <li>
            <span class="policy-icon"><img src="assets/truck.png" alt="" /></span>
            <span class="policy-desc">Agregar el producto al carrito para conocer los precios de envío.</span>
        </li>
        <li>
            <span class="policy-icon"><img src="assets/plane.png" alt="" /></span>
            <span class="policy-desc">Lo recibes al instante, ni cuenta te vas a dar.</span>
        </li>
      </ul>
      <div class="checkout-process">
        <div class="top">
          <input id="quantity" type="number" value="1" min="1" max="10" data-id="${product.id}" onchange="changeSubtotal(event, 'checkout-total-price')">
          <button class="btn btn-primary">Comprar</button>
        </div>
        <div class="bottom">
          <button class="btn btn-outline" data-id="${product.id}" onclick="saveProduct(event)">Agregar al carrito</button>
        </div>
      </div>
    </div>
  `;
}

export { changeMini, changeSubtotal, saveProduct, getProductCheckoutTemplate, getProductImageTemplate, getProductDescriptionTemplate }