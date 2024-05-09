const productImageSection = document.getElementById('product-images')
const productDescriptionSection = document.getElementById('product-description')
const productCheckoutSection = document.getElementById('product-checkout')

const query = location.search;
const params = new URLSearchParams(query);
const id = params.get('id');

const changeMini = (event) => {
  const route = event.target.src;
  const mainImage = document.getElementById('main-image');
  mainImage.src = route;
}

const changeSubtotal = (event) => {
  const product = products.find(product => product.id === Number(id));
  const quantityProducts = event.target.value;
  const productPrice = product.price;
  const subtotal = quantityProducts * productPrice;
  const priceSelector = document.getElementById('checkout-total-price');
  priceSelector.innerHTML = subtotal.toFixed(2);

}

const saveProduct = () => {
  const product = products.find(product => product.id === Number(id))
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

  let carrito = localStorage.getItem('cart');

  if (carrito == null) {
    const stringBuy = JSON.stringify([buy]);
    localStorage.setItem("cart", stringBuy);
  } else {
    let carritoLocalStorage = JSON.parse(carrito);
    //! VALIDACION DE PRODUCTO REPETIDO
    carritoLocalStorage.push(buy);
    localStorage.setItem('cart', JSON.stringify(carritoLocalStorage));
  }
}

const printDetails = (productId) => {
  const product = products.find(product => product.id === Number(productId));
  productImageSection.innerHTML = getProductImageTemplate(product);
  productDescriptionSection.innerHTML = getProductDescriptionTemplate(product);
  productCheckoutSection.innerHTML = getProductCheckoutTemplate(product);
}

const getProductImageTemplate = (product) => {
  let images = product.images.map((x, index) => `<div class="thumbnail-container"><img src="${x}" alt="miniatura ${index + 1}" onclick="changeMini(event)"/></div>`);
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
          <input id="quantity" type="number" value="1" min="1" max="10" onchange="changeSubtotal(event)">
          <button class="btn btn-primary">Comprar</button>
        </div>
        <div class="bottom">
          <button class="btn btn-outline" onclick="saveProduct()">Agregar al carrito</button>
        </div>
      </div>
    </div>
  `;
}

printDetails(id)