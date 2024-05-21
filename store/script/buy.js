import { hasSession } from "./module/session.js";
import { getCartProducts } from "./module/utilsProduct.js";
import { finalizePurchase } from "./module/utilsProductCart.js";
import { ICONS_SA, showAlert, showConfirmDialog } from "./module/utilsSweetAlert.js";

const buySelector = document.getElementById('finalizar-compra')
buySelector.addEventListener('click', () => {
  if (!hasSession()) {
    showAlert('Aviso!!!', 'Tienes que iniciar sesion para poder finalizar la compra.', ICONS_SA.WARNING);
    return;
  }

  const cartProducts = getCartProducts();
  if (cartProducts.length > 0) {
    showConfirmDialog('Confirmar pedido!', '¿Seguro que deseas finalizar la compra?', finalizePurchase);
  } else {
    showAlert('Sin carrito', 'Agrega al menos un producto atu carrito', ICONS_SA.WARNING)
  }
})
