import { getCartProducts } from "./module/utilsProduct.js";
import { finalizePurchase } from "./module/utilsProductCart.js";
import { ICONS_SA, showAlert, showConfirmDialog } from "./module/utilsSweetAlert.js";

const buySelector = document.getElementById('finalizar-compra')
buySelector.addEventListener('click', () => {
  const cartProducts = getCartProducts();
  if (cartProducts.length > 0) {
    showConfirmDialog('Confirmar pedido!', '¿Seguro que deseas finalizar la compra?', finalizePurchase);
  } else {
    showAlert('Sin carrito', 'Agrega al menos un producto atu carrito', ICONS_SA.WARNING)
  }
})
